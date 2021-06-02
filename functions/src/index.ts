import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as admin from "firebase-admin";
import Stripe from "stripe";

admin.initializeApp();

// Used for WEBHOOK
const endpointSecret = functions.config().stripe.signing;

// Used for Stripe
const secret = functions.config().stripe.testkey;

const stripe = new Stripe(secret, {
  apiVersion: "2020-08-27",
  typescript: true,
});

// In here we create a new customer in Stripe in Firebase
export const createStripeCustomer = functions.auth.user()
    .onCreate(async (snap, context) => {
      console.log("snap: ", snap);
      const customer = await stripe.customers.create({
        email: snap.email,
      });

      const batch = admin.firestore().batch();

      const userRef = admin.firestore().collection("users")
          .doc(snap.uid);
      const cusRef = admin.firestore().collection("customers")
          .doc(customer.id);

      // To have reference between the customerId and the user id
      batch.update(userRef, {customerId: customer.id});
      batch.set(cusRef, {user: snap.uid});

      return batch.commit();
    });

export const startPaymentIntent = functions.https.onCall(
    async (data, context) => {
      console.log("called payment intent: ", data);
      // in the data we send the uid of ths firebase user
      const user = await admin.firestore()
          .collection("users").doc(data.userId).get();
      const userData = user.data();
      console.log("userData: ", userData);

      if (userData) {
        const intent = await stripe.paymentIntents.create( {
          amount: data.amount,
          currency: "EUR",
          // The customerId in firebase collection 'users'
          customer: userData.customerId,
        });

        // In here we store all payment intents inside orders
        await admin.firestore()
            .collection("orders").doc(intent.id).set( {
              // to connect the payment with the order made by customer
              items: data.items,
              status: "Waiting for payment",
              // in order to keep a clear amount as firebase uses another number
              amount: data.amount / 100,
              customerId: userData.customerId,
              userId: data.userId,
            });

        return intent;
      } else {
        return false;
      }
    }
);

// Webhook part of Stripe
// Created in our Stripe Account under:
// Developer -> Webhooks -> Endpoint (Add endpoint)
// Graps the signature to verify if the request is valid
export const webhook = functions.https.onRequest(async (request, response) => {
  const signature = request.headers["stripe-signature"] || "";

  let event = null;

  try {
    event = stripe.webhooks.constructEvent(
        request.rawBody,
        signature,
        endpointSecret
    );
  } catch (err) {
    // invalid signature
    response.status(400).end();
    return;
  }

  let intent: any = null;
  let status = "Succeeded";

  switch (event["type"]) {
    case "payment_intent.succeeded":
      intent = event.data.object;
      break;
    case "payment_intent.payment_failed":
      intent = event.data.object;
      status = "Payment failed";
      break;
  }

  if (intent) {
    try {
      const invoiceUrl = intent.charges.data[0].receipt_url;
      console.log("invoice: ", invoiceUrl);
      await admin
          .firestore()
          .collection("orders")
          .doc(intent.id)
          .update({
            status,
            invoice: invoiceUrl,
          });
    } catch (e) {
      console.log("Error while getting invoice: ", e);
    }
  }

  response.sendStatus(200);
});

// Function that will return data needed to create the orders page
// A specific order placed by specific a customer
export const getCustomerOrders = functions.https.onCall(
    async (data, context) => {
      const user = await admin
          .firestore()
          .collection("users")
          .doc(data.userId)
          .get();
      const userData = user.data();
      if (userData) {
        return stripe.paymentIntents.list({customer: userData.customerId});
      } else {
        return null;
      }
    }
);

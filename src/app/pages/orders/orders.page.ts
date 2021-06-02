import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  payments = [];
  items = {};
  private _iab: any;

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this._productService.getCustomerOrders().subscribe( res => {
      console.log('my orders: ', res);
      
      this.payments = res.data;
      this.payments.map(item => {
        console.log('item: ', item)
        item.order = this._productService.getOrderData(item.id).pipe(
          tap(data => {
            if(data){
              console.log('data: ', data);
              for(let item of data['items']){ //to iterate the collection 'items' from 'orders' in Firebase
                if(!this.items[item.id]){
                  this.items[item.id] = {};
                  this._productService.getOneProduct(item.id).pipe(
                    tap(product => {
                      console.log('product: ', product);
                      this.items[item.id].itemName = product['itemName']; //To reach the id of the item in 'products' collection in Firebase
                    })
                  ).subscribe();
                }
              }
            }
          })
        )
        return item
      });
    });
  }

/*   openInvoice(item){
    this._productService.getOrderData(item.id).subscribe( res =>{
      
      const browser = this._iab.create(res['invoice', '_system'];)
    })
  } */

}

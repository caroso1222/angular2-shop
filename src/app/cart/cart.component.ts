import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

const OFFSET_HEIGHT: number = 170
const PRODUCT_HEIGHT: number = 48

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any[] = []
  numProducts: number = 0
  animatePlop: boolean = false
  animatePopout: boolean = false
  expanded: boolean = false
  expandedHeight: string
  cartTotal: number = 0


  changeDetectorRef: ChangeDetectorRef


  constructor(private cartService: CartService, changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef
  }

  ngOnInit() {
    this.expandedHeight = '0'
    this.cartService.productAdded$.subscribe(data => {
      this.products = data.products
      this.cartTotal = data.cartTotal
      this.numProducts = data.products.reduce((acc, product) => {
        acc+=product.quantity
        return acc
      }, 0)

      //Make a plop animation
      if(this.numProducts > 1){
        this.animatePlop = true
        setTimeout(()=>{
          this.animatePlop = false
        },160)
      }else if(this.numProducts == 1){
        this.animatePopout = true
        setTimeout(()=>{
          this.animatePopout = false
        },300)
      }
      this.expandedHeight = (this.products.length*PRODUCT_HEIGHT+OFFSET_HEIGHT) + 'px'
      if(!this.products.length){
        this.expanded = false
      }
      this.changeDetectorRef.detectChanges()
    })
  }

  deleteProduct(product){
    this.cartService.deleteProductFromCart(product)
  }

  onCartClick(){
    this.expanded = !this.expanded
  }

}

import { Component, ViewChild, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewRef, } from '@angular/core';

@Component({
  selector: 'app-tutorial55',
  templateUrl: './tutorial55.component.html',
  styleUrls: ['./tutorial55.component.css']
})
export class Tutorial55Component implements OnInit {

  @ViewChild('showHere', { read: ViewContainerRef }) showHere !: ViewContainerRef;

  constructor(private _vcf: ViewContainerRef, private _cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  async loadProduct() {
    this.showHere.clear();
    const { ProductComponent } = await import("./product/product.component");
    this.showHere.createComponent(
      this._cfr.resolveComponentFactory(ProductComponent)
    )

  }
  async loadOrder() {
    this.showHere.clear();
    const { OrderComponent } = await import("./order/order.component");
    this.showHere.createComponent(
      this._cfr.resolveComponentFactory(OrderComponent)
    )
  }

}

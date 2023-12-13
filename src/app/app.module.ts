import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {InventoryModule} from './inventory/inventory.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {ProductService} from './demo/service/product.service';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent, NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    InventoryModule,
    FormsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

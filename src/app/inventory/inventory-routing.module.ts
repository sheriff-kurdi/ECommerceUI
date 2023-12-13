import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockListComponent} from "./stock/pages/stock-list/stock-list.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: StockListComponent}
  ])],
  exports: [RouterModule]
})
export class InventoryRoutingModule {
}

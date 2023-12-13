import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';


import { InventoryRoutingModule } from './inventory-routing.module';
import { StockListComponent } from './stock/pages/stock-list/stock-list.component';
import { StockInfoHeaderComponent } from './stock/components/stock-info-header/stock-info-header.component';
import { StockCrudTableComponent } from './stock/components/stock-crud-table/stock-crud-table.component';
import {AppConfigModule} from "../layout/config/config.module";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {PaginatorModule} from 'primeng/paginator';


import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { StockCreateEditComponent } from './stock/components/stock-create-edit/stock-create-edit.component';
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {ToggleButtonModule} from "primeng/togglebutton";
import {AutoCompleteModule} from "primeng/autocomplete";


@NgModule({
  declarations: [
    StockListComponent,
    StockInfoHeaderComponent,
    StockCrudTableComponent,
    StockCreateEditComponent,

  ],
  imports: [
    InventoryRoutingModule,
    HttpClientModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    AppConfigModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DialogModule,
    InputNumberModule,
    ConfirmDialogModule,
    CommonModule,
    FormsModule,
    MultiSelectModule,
    DropdownModule,
    ToggleButtonModule,
    AutoCompleteModule,
    PaginatorModule,
  ],
  providers:[
    ConfirmationService,
    MessageService
  ]
})
export class InventoryModule { }

import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {ProductService} from "../../../../demo/service/product.service";
import {Product} from "../../../../demo/api/product";
import {StockService} from "../../../services/stock/stock.service";

@Component({
  selector: 'app-stock-crud-table',
  templateUrl: './stock-crud-table.component.html',
  styleUrls: ['./stock-crud-table.component.css']
})
export class StockCrudTableComponent implements OnInit {


  productDialog: boolean = false;
  filters = {
    query: ''
  }
  items: MenuItem[] = [];
  stock = [];

  page = {
    page_number: 1,
    page_size: 10,
    total_records: 0
  }
  selectedProduct: any;
  products: Product[] = [];

  product: any;

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  constructor(private productService: ProductService
    , private messageService: MessageService
    , private confirmationService: ConfirmationService
    , private stockService: StockService) {
  }

  ngOnInit() {
    this.getAllStock();
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({severity: 'info', summary: 'Add', detail: 'Data Added'});
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({severity: 'success', summary: 'Update', detail: 'Data Updated'});
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({severity: 'error', summary: 'Delete', detail: 'Data Deleted'});
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io'

      }
    ];
    this.productService.getProducts().then(data => this.products = data);
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = [];
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.selectedProduct = null;

  }

  getAllStock(isSearch = false) {
    let filters;
    if (isSearch) {
      filters = {
        PageNumber: this.page.page_number,
        PageSize: this.page.page_size,
        Query: this.filters.query
      };
    } else {
      filters = {
        PageNumber: this.page.page_number,
        PageSize: this.page.page_size
      };
    }

    this.stockService.getAll(filters).subscribe(res => {
      this.stock = res['data'];
      this.page.total_records = res['totalRecords']
      this.page.page_number = res['pageNumber']
    })
  }

  onPageChange(event: any) {
    this.page.page_number = event.page + 1;
    this.page.page_size = event.rows;
    this.getAllStock();
  }


}

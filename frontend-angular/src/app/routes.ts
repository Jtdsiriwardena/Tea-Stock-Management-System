import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LowStockAlertComponent } from './components/low-stock-alert/low-stock-alert.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: AddProductComponent },
  { path: 'low-stock', component: LowStockAlertComponent },
];

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-low-stock-alert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './low-stock-alert.component.html',
  styleUrls: ['./low-stock-alert.component.css']
})
export class LowStockAlertComponent implements OnInit {
  lowStockProducts: Product[] = [];
  threshold: number = 10;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadLowStockProducts();
  }

  loadLowStockProducts(): void {
    this.productService.getLowStockProducts(this.threshold).subscribe(data => {
      this.lowStockProducts = data;
    });
  }

  onThresholdChange(): void {
    this.loadLowStockProducts();
  }
}
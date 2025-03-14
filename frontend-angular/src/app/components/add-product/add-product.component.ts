import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    category: '',
    price: 0,
    quantityInStock: 0,
    supplier: ''
  };
  isEditMode: boolean = false;  

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditMode = true;
      this.loadProduct(Number(productId));
    }
  }

  
  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(data => {
      if (data) {
        this.product = data; 
      } else {
        console.error(`Product with ID ${id} not found.`);
        this.router.navigate(['/']);
      }
    });
  }

 
  saveProduct(): void {
    if (this.isEditMode) {
      
      this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
        Swal.fire('Success!', 'Product updated successfully!', 'success'); 
        setTimeout(() => this.router.navigate(['/products']), 2000);  
      });
    } else {
      
      this.productService.addProduct(this.product).subscribe(() => {
        Swal.fire('Success!', 'Product added successfully!', 'success');  
        setTimeout(() => this.router.navigate(['/products']), 2000); 
      });
    }
  }

 
  cancel(): void {
    this.router.navigate(['/products']);
  }
}

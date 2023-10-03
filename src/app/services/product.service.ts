import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { productDetails } from 'interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  addProduct(product: productDetails) {
    console.log(product);
    return this.http.post('http://localhost:3000/products', product);
  }

  getProducts() {
    console.log("get products");
    return this.http.get<productDetails[]>('http://localhost:3000/products');
  }


  deleteProduct(productId: number) {
    return this.http.delete(`http://localhost:3000/products/${productId}`);
  }


  getProduct(productId: string) {
    return this.http.get<productDetails>(`http://localhost:3000/products/${productId}`);
  }

  updateProduct(updatedProduct:productDetails){
   
    return this.http.put(`http://localhost:3000/products/${updatedProduct.id}`,updatedProduct);
  }

  getPopularProducts( ){
    console.warn(this.http.get<productDetails[ ]>('http://localhost:3000/products?_limit=3'));
   return this.http.get<productDetails[ ]>('http://localhost:3000/products?_limit=3');
  }

}

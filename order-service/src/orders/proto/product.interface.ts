import { Observable } from 'rxjs';

export interface ProductServiceClient {
  getProduct(request: GetProductRequest): Observable<GetProductResponse>;
}

export interface GetProductRequest {
  id: number;
}

export interface GetProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

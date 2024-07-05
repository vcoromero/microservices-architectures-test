import { Observable } from 'rxjs';

export interface ProductServiceClient {
  FindOne(request: FindOneRequest): Observable<FindOneResponse>;
}

export interface FindOneRequest {
  id: number;
}

export interface FindOneResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

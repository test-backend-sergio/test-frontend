import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private url = 'http://localhost:4000';

	constructor(private http: HttpClient) {}

	getData() {
		return this.http.get(this.url);
	}

	postDataLogin(data: any) {
		return this.http.post(`${this.url}/login`, data, { responseType: 'text' }).subscribe((data) => {
			console.log(data);
		});
	}

	postDataRegister(data: any) {
		return this.http.post(`${this.url}/user`, data, { responseType: 'text' }).subscribe((data) => {
			console.log(data);
		});
	}

  petDataRecipe(data: any) {
    return this.http.get(`${this.url}/recipe`, data);
  }

  postDataRecipe(data: any) {
    return this.http.post(`${this.url}/recipe`, data, { responseType: 'text' }).subscribe((data) => {
      console.log(data);
    });
  }
  getDataRecipe(data: any) {
    return this.http.get(`${this.url}/recipe`, data);
  }
}

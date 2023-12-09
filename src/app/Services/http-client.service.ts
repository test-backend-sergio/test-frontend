import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private url = 'http://localhost:4000';

	constructor(private http: HttpClient) {}

	GetData() {
		return this.http.get(this.url);
	}

	// PostData(data: any){
	//   return this.http.post(this.url, data);
	// }

	PostDataLogin(data: any) {
		return this.http.post(`${this.url}/login`, data, { responseType: 'text' }).subscribe((data) => {
			console.log(data);
		});
	}

	PostDataRegister(data: any) {
		return this.http.post(`${this.url}/user`, data, { responseType: 'text' }).subscribe((data) => {
			console.log(data);
		});
	}
}

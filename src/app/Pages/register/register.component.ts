import { Component } from '@angular/core';
import { HttpService } from '../../Services/http-client.service';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	email: string = '';
	password: string = '';
	constructor(private http: HttpService) {}

	getData() {
		const [dataEmail, dataPass] = [
			document.getElementById('email') as HTMLFormElement,
			document.getElementById('password') as HTMLFormElement
		];
		const data = { email: dataEmail['value'], password: dataPass['value'] };
		//  console.log(dataEmail['value'], dataPass['value']);
		this.http.PostDataRegister(data);
		console.log('Registro enviado!!');
		console.log(data);
	}
}

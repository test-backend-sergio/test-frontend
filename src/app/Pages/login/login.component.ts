import { Component } from '@angular/core';
import { NavComponent } from '../../Components/nav/nav.component';
import { HttpService } from '../../Services/http-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
	selector: 'app-login',
	standalone: true,
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
	imports: [NavComponent, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
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
		this.http.postDataLogin(data);
		console.log('Login efetuado com sucesso!');
		console.log(data);
		if (data) {
			window.location.href = 'http://localhost:4200/Home';
		}
	}
}

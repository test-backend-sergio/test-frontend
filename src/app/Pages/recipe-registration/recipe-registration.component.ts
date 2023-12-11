import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../Services/http-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-recipe-registration',
	standalone: true,
	imports: [MatExpansionModule, FormsModule, ReactiveFormsModule],
	templateUrl: './recipe-registration.component.html',
	styleUrl: './recipe-registration.component.css',

})
export class RecipeRegistrationComponent {
  name: string = '';
  preparation: string = '';
  ingredients: string = '';

	constructor(private http: HttpService) {}
	PostRecipe() {
		const [dataRecipeName, dataPreparation, dataIngredients] = [
			document.getElementById('RecipeName') as HTMLFormElement,
			document.getElementById('Preparation') as HTMLFormElement,
			document.getElementById('Ingredients') as HTMLFormElement
		];
		const data:any = {
			name: dataRecipeName['value'],
      preparation: dataPreparation['value'],
      ingredients: dataIngredients['value']
		};

    this.http.postDataRecipe(data);
		console.log(dataRecipeName['value'], dataPreparation['value'], dataIngredients['value']);

		if (data) {
      // window.location.href = 'http://localhost:4200/Home';
      console.log('Receitas enviadas com sucesso!', data);
		} else {
			console.log('Erro ao enviar receita!');
		}
	}
}

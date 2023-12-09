import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../Services/http-client.service';

@Component({
	selector: 'app-recipe-registration',
	standalone: true,
	imports: [MatExpansionModule],
	templateUrl: './recipe-registration.component.html',
	styleUrl: './recipe-registration.component.css'
})
export class RecipeRegistrationComponent {
	adjustTextAreaHeight($event: Event) {
		throw new Error('Method not implemented.');
	}
	texto: any;

	constructor(private http: HttpService) {}

	PostRecipe(recipeData: any) {
		const [dataRecipe, dataPreparation, dataIngredients] = [
			document.getElementById('RecipeName') as HTMLFormElement,
			document.getElementById('Method') as HTMLFormElement,
			document.getElementById('Ingredients') as HTMLFormElement
		];
		const data = {
			name: dataRecipe['value'],
      preparation: dataPreparation['value'],
      ingredients: dataIngredients['value']
		};
		// console.log(dataRecipe['value'], dataMethod['value'], dataIngredients['value']);

		if (data) {
      // window.location.href = 'http://localhost:4200/Home';
      console.log('Receitas enviadas com sucesso!', data);
			this.http.postDataRecipe(recipeData);
		} else {
			console.log('Erro ao enviar receita!');
		}
	}
	onChangeTextArea(event: Event): void {
		const textArea = event.target as HTMLTextAreaElement;
		textArea.style.height = 'auto';
		textArea.style.height = textArea.scrollHeight + 'px';
	}
}

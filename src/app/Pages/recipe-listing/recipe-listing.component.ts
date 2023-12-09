import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { HttpService } from '../../Services/http-client.service';

@Component({
	selector: 'app-recipe-listing',
	templateUrl: './recipe-listing.component.html',
	styleUrls: ['./recipe-listing.component.css']
})
export class RecipeListingComponent {
	recipes: any[] = [];

	constructor(private http: HttpService) {}

	// ngOnInit(): void {
	// 	this.getRecipes();

	// }

  // getRecipes() {
  //   this.http.getDataRecipe(this.recipes).subscribe((data) => {
  //     this.recipes = data;
  //     console.log(data);
  //   });
  // }
}

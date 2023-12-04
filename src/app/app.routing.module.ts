import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './Pages/login-register/login-register.component';
import { HomeComponent } from './Pages/home/home.component';
import { RecipeRegistrationComponent } from './Pages/recipe-registration/recipe-registration.component';
import { RecipeListingComponent } from './Pages/recipe-listing/recipe-listing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Login', component: LoginRegisterComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'RegistrarReceita', component: RecipeRegistrationComponent },
    { path: 'ListaReceita', component: RecipeListingComponent }
];

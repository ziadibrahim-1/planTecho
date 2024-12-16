import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';

import { ProductsComponent } from './layout/pages/products/products.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { authGuard } from './shared/guard/auth.guard';
import { CartComponent } from './layout/pages/cart/services.component';
import { PlantChartsComponent } from './layout/pages/plant-charts/plant-charts.component';
import { ForgetpasswordComponent } from './layout/additions/forgetpassword/forgetpassword.component';

export const routes: Routes = [
    {path : '' , redirectTo : 'home' , pathMatch : 'full'},
    {path : 'home' , component:HomeComponent , canActivate:[authGuard]},
    {path : 'about' , component:BrandsComponent , canActivate:[authGuard]},
    {path : 'products' , component:ProductsComponent , canActivate:[authGuard]},
    {path : 'cart' , component:CartComponent , canActivate:[authGuard]},
    {path: 'brands' , component:BrandsComponent, canActivate:[authGuard]},
    {path : 'categories' , component:CategoriesComponent , canActivate:[authGuard]},
    {path : 'login' , component:LoginComponent},
    {path : 'register' , component:RegisterComponent},
    {path:'forgetpassword',component:ForgetpasswordComponent},
    {path: 'plant-charts', component: PlantChartsComponent},
    {path : '**' , component:NotfoundComponent}
];

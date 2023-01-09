import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CareersComponent } from './Components/careers/careers.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductsComponent } from './Components/products/products.component';

import { EmployeeCRUDComponent } from './Components/employeecrud/employeecrud.component';
import { DisplayproductsComponent } from './Components/displayproducts/displayproducts.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { QueryproductdetailsComponent } from './Components/queryproductdetails/queryproductdetails.component';
import { ContractjobComponent } from './Components/contractjob/contractjob.component';
import { PermanentjobComponent } from './Components/permanentjob/permanentjob.component';
import { ProductResolverService } from './services/product-resolver.service';

const routes: Routes = [
  { path: 'carousel',component:CarouselComponent },
  { path: 'displayproducts',component:DisplayproductsComponent },
  { path: 'employeeCrud', component:EmployeeCRUDComponent},
  { path: 'products', component:ProductsComponent},
  { 
    path: 'productdetails/:id',
    component:ProductdetailsComponent,
    resolve:{productInfo:ProductResolverService},
  },
  { path:'queryproductdetails',component:QueryproductdetailsComponent},
   {path:'careers',component:CareersComponent,children:[
    {path:'contractjob',component:ContractjobComponent},
    {path:'permanentjob',component:PermanentjobComponent}
   ]},
  { path: '', component: HomeComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', component:NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

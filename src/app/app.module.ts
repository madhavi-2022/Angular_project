import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CenterComponent } from './Components/center/center.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LoginModule } from 'src/login/login.module';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectiveComponent } from './Components/directive/directive.component';
import { DisplayproductsComponent } from './Components/displayproducts/displayproducts.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeCRUDComponent } from './Components/employeecrud/employeecrud.component';
import { GreetComponent } from './Components/greet/greet.component';
import { PipesdemoComponent } from './Components/pipesdemo/pipesdemo.component';
import { RemainingPipe } from './pipesdemo/remaining.pipe';
import { GenderpipePipe } from './pipesdemo/genderpipe.pipe';
import { TruncatePipe } from './pipesdemo/truncate.pipe';
import { SearchPipe } from './pipesdemo/search.pipe';
import { MysortPipe } from './pipesdemo/mysort.pipe';
import { EmployeeCRUD1Component } from './Components/employee-crud1/employee-crud1.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './Components/employee-add/employee-add.component';
import { Httpdemo1Component } from './Components/httpdemo1/httpdemo1.component';
import { Math1Component } from './Components/math1/math1.component';
import { Math2Component } from './Components/math2/math2.component';
import { UsertableComponent } from './Components/usertable/usertable.component';
import { UserCardsComponent } from './Components/user-cards/user-cards.component';
import { EmpServiceComponent } from './Components/emp-service/emp-service.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { HttpEmpCrudComponent } from './Components/http-emp-crud/http-emp-crud.component';
import { FormcompntComponent } from './Components/formcompnt/formcompnt.component';

import { ReactiveformComponent } from './Components/reactiveform/reactiveform.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CareersComponent } from './Components/careers/careers.component';
import { ServicesComponent } from './Components/services/services.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { QueryproductdetailsComponent } from './Components/queryproductdetails/queryproductdetails.component';
import { ContractjobComponent } from './Components/contractjob/contractjob.component';
import { PermanentjobComponent } from './Components/permanentjob/permanentjob.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    ProductsComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectiveComponent,
    DisplayproductsComponent,
    EmployeeCRUDComponent,
    GreetComponent,
    PipesdemoComponent,
    RemainingPipe,
    GenderpipePipe,
    TruncatePipe,
    SearchPipe,
    MysortPipe,
    EmployeeCRUD1Component,
    EmployeeListComponent,
    EmployeeAddComponent,
    Httpdemo1Component,
    Math1Component,
    Math2Component,
    UsertableComponent,
    UserCardsComponent,
    EmpServiceComponent,
    CommentsComponent,
    HttpEmpCrudComponent,
    FormcompntComponent,
    ReactiveformComponent,
    HomeComponent,
    AboutUsComponent,
    CareersComponent,
    ServicesComponent,
    NotfoundComponent,
    NavbarComponent,
    ProductdetailsComponent,
    QueryproductdetailsComponent,
    ContractjobComponent,
    PermanentjobComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule],
    
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

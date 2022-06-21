import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home/view-home.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { AnotherPageComponent } from './another-page/another-page.component';



const routes: Routes = [
  {path:'', component: ViewHomeComponent},
  {path:'/anotherPage', component: AnotherPageComponent}
]

@NgModule({
  declarations: [
    ViewHomeComponent,
    HeaderComponent,
    ErrorComponent,
    FooterComponent,
    HeaderButtonComponent,
    AnotherPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

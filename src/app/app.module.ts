import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { FreeWalletYnvModule} from 'free-wallet-ynv';
import { ErrorComponent } from './home/error/error.component';
import { ErrorInterceptor } from './error.interceptor';
import { AnotherPageComponent } from './home/another-page/another-page.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {path:'anotherPage',component:AnotherPageComponent},
  {path:'error',component:ErrorComponent},
  {path:'', redirectTo:'app', pathMatch: 'full'},
  {path:'**', redirectTo:'error'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FreeWalletYnvModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

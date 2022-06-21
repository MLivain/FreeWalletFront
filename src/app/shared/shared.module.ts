import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeWalletYnvModule} from 'free-wallet-ynv';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FreeWalletYnvModule,
    
  ],
  providers: [],
  exports: [FreeWalletYnvModule]
})

export class SharedModule { }

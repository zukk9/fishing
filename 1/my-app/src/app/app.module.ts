import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,    
  ],
  imports: [BrowserModule, FormsModule,
    //  Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

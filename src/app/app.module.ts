import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonViewComponent } from './button-view/button-view.component';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SmartTableModule],
  declarations: [AppComponent, ButtonViewComponent],
  bootstrap: [AppComponent],
  providers: [],
  entryComponents: [ButtonViewComponent],
})
export class AppModule {}

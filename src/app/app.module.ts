import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RollOnScrollDirective } from './directives/rolarPokeball/roll-on-scroll.directive';
import { FormatarNumeroPipe } from './pipes/formatacao/formatar-numero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    RollOnScrollDirective,
    FormatarNumeroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

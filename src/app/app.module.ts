import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserModule } from 'src/app/user/user.module';

// Components
import { AppComponent } from 'src/app/app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatExpansionModule
} from '@angular/material';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }

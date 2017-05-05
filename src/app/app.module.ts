import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { CovalentCoreModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { AnimalNewComponent } from './animal-new/animal-new.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    AnimalNewComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    CovalentCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

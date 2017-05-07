import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CovalentCoreModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { AnimalNewComponent } from './animal-new/animal-new.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalService } from './animal.service';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { routing } from './app.routing';
import { DietPipe } from './diet.pipe';
import { LocationPipe } from './location.pipe';

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
    AnimalListComponent,
    AnimalDetailComponent,
    AnimalEditComponent,
    DietPipe,
    LocationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    CovalentCoreModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

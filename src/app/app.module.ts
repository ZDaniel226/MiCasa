import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"rtdb-iot-b1e1c","appId":"1:535623783109:web:8cd425c8e7d18d7ee496ac","databaseURL":"https://rtdb-iot-b1e1c-default-rtdb.firebaseio.com","storageBucket":"rtdb-iot-b1e1c.appspot.com","apiKey":"AIzaSyA0LWn7Mp-jqz4qEFprlADm_ytg97yweig","authDomain":"rtdb-iot-b1e1c.firebaseapp.com","messagingSenderId":"535623783109","measurementId":"G-69HV9TBMVN"})), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

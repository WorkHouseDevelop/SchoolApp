import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { UsersComponent } from './users/users.component';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    provideMessaging(() => getMessaging()),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcWETz-oJarwWF7lheeNKYOdw8BwaGrKk'
    }),
    IonicModule.forRoot(),
  ],
  providers: [
    // ScreenTrackingService,UserTrackingService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

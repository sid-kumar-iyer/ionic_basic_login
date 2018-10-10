import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{LoginPage} from '../pages/login/login';
import{RegisterPage} from '../pages/register/register';
import{LoggedinPage} from '../pages/loggedin/loggedin';
import{ChatPage} from '../pages/chat/chat';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseAuth = {
  apiKey: "AIzaSyBCxV0jZxrOWPfUqGjeol3DByaLJIpcq9Y",
  authDomain: "test-project-408c0.firebaseapp.com",
  databaseURL: "https://test-project-408c0.firebaseio.com",
  projectId: "test-project-408c0",
  storageBucket: "test-project-408c0.appspot.com",
  messagingSenderId: "852197633130"
  
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    ChatPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

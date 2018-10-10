import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import{ChatPage} from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController ,private fire: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message : string){
    this.alertCtrl.create({
      title: 'Welcome '+ this.fire.auth.currentUser.email,
      subTitle: 'you are logged in',
      buttons: ['OK']
    }).present();
    }
   
  

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
       console.log('got some data',this.fire.auth.currentUser);
       this.alert('you are logged in');
       this.navCtrl.setRoot(ChatPage);
    })
    .catch(error=>{
      console.log('got an error',error);
      this.alert(error.message);
    })

    console.log("would signin with",this.user.vlaue , this.password.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  
  }

}

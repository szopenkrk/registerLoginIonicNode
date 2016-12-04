import { Component, ViewChild } from '@angular/core';
import { StatusBar } from 'ionic-native';
import { App, Platform, Nav, MenuController, NavController, ionicBootstrap } from 'ionic-angular';
import { LoginPage } from './pages/login/login'
import { HomePage } from './pages/home/home'
import { GirlsPage } from './pages/girls/girls';
import { AboutPage } from './pages/about/about';
import { MapPage } from './pages/map/map';
import { ProfilePage } from "./pages/profile/profile";

@Component({
  templateUrl: 'build/app.html',
  providers: [NavController]
})

export class MyApp {

  @ViewChild(Nav) nav : Nav;
  public rootPage: any;
  private pages: any[];
  constructor( private app: App, private platform: Platform, private menu: MenuController) {
    this.rootPage = HomePage;
    this.menu = menu;


    this.pages = [
      { title: 'Login', component: LoginPage},
      { title: 'Home', component: HomePage},
      { title: 'Girls', component: GirlsPage },
      { title: 'About', component: AboutPage },
      { title: 'Map', component: MapPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Wyloguj' }
    ];

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page, app) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}

ionicBootstrap(MyApp);

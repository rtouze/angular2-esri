import {Component} from 'angular2/core';
//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import {HeroesComponent} from './heroes.component';
//import {HeroDetailComponent} from './hero-detail.component';
//import {DashboardComponent} from './dashboard.component';
//import Map = require('esri/map');

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello world</h1>
    <p>la map</p>
    <div id="map"> </div>
  `,
  styles: [`
    a {padding: 5px;text-decoration: none;}
    a:visited, a:link {color: #444;}
    a:hover {color: white; background-color: #1171a3;}
    a.router-link-active {color: white; background-color: #52b9e9;}
  `],
  //directives: [ROUTER_DIRECTIVES]
})
//@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
//  {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
//  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
//  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
//])
export class AppComponent { 
  constructor() {
    require(["esri/map", "dojo/domReady!"], function(Map) {
      var map = new Map("map", {
      center: [-118, 34.5],
      zoom: 8,
      basemap: "topo"
      });
    }
  } 
}

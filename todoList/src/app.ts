import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import {PLATFORM} from 'aurelia-framework';
import { platform } from 'os';


@autoinject
export class App {
  public message: string = 'Hello World!';
  router: Router;


  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Router Test';
    config.map([
      {route: [''], name: 'index', moduleId: PLATFORM.moduleName("pages/index"), title: 'Home'},
      {route: ['new'], name: 'newTodo', moduleId: PLATFORM.moduleName("pages/new"), title: 'New Todo'},
      {route: ['edit'], name: 'editTodo', moduleId: PLATFORM.moduleName("pages/edit"), title: 'Edit Todo'},
    ]);
  }
}

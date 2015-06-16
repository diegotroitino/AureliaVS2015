import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router){
        config.title = 'Aurelia';
        config.map([
                { route: ['', 'welcome'], moduleId: 'views/welcome', nav: true, title: 'Welcome' }//,
                //{ route: 'flickr', moduleId: 'views/flickr', nav: true },
                //{ route: 'child-router', moduleId: 'views/child-router', nav: true, title: 'Child Router' }
            ]);
        this.router = router;
    }
}

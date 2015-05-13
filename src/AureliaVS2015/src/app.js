import {Router} from 'aurelia-router';

export class App {
    static inject() { return [ Router ]; }

    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], moduleId: 'views/welcome', nav: true, title: 'Welcome' }//,
                //{ route: 'flickr', moduleId: 'views/flickr', nav: true },
                //{ route: 'child-router', moduleId: 'views/child-router', nav: true, title: 'Child Router' }
            ]);
        });
    }
}
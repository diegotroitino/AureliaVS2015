System.register(['aurelia-router'], function (_export) {
    'use strict';

    var Router, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            App = (function () {
                function App(router) {
                    _classCallCheck(this, App);

                    this.router = router;
                    this.router.configure(function (config) {
                        config.title = 'Aurelia';
                        config.map([{ route: ['', 'welcome'], moduleId: 'views/welcome', nav: true, title: 'Welcome' } //,
                        //{ route: 'flickr', moduleId: 'views/flickr', nav: true },
                        //{ route: 'child-router', moduleId: 'views/child-router', nav: true, title: 'Child Router' }
                        ]);
                    });
                }

                _createClass(App, null, [{
                    key: 'inject',
                    value: function inject() {
                        return [Router];
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsR0FBRzs7Ozs7Ozs7b0NBRlIsTUFBTTs7O0FBRUQsZUFBRztBQUdELHlCQUhGLEdBQUcsQ0FHQSxNQUFNLEVBQUU7MENBSFgsR0FBRzs7QUFJUix3QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsd0JBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzVCLDhCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6Qiw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFOzs7eUJBR3JGLENBQUMsQ0FBQztxQkFDTixDQUFDLENBQUM7aUJBQ047OzZCQWJRLEdBQUc7OzJCQUNDLGtCQUFHO0FBQUUsK0JBQU8sQ0FBRSxNQUFNLENBQUUsQ0FBQztxQkFBRTs7O3VCQUQ3QixHQUFHOzs7MkJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==
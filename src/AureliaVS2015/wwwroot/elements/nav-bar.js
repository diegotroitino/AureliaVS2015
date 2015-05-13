System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var Behavior, NavBar;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            Behavior = _aureliaFramework.Behavior;
        }],
        execute: function () {
            NavBar = (function () {
                function NavBar() {
                    _classCallCheck(this, NavBar);
                }

                _createClass(NavBar, null, [{
                    key: 'metadata',
                    value: function metadata() {
                        return Behavior.withProperty('router');
                    }
                }]);

                return NavBar;
            })();

            _export('NavBar', NavBar);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL25hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQUVhLE1BQU07Ozs7Ozs7O3lDQUZYLFFBQVE7OztBQUVILGtCQUFNO3lCQUFOLE1BQU07MENBQU4sTUFBTTs7OzZCQUFOLE1BQU07OzJCQUNBLG9CQUFFO0FBQUUsK0JBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFBRTs7O3VCQURuRCxNQUFNOzs7OEJBQU4sTUFBTSIsImZpbGUiOiJlbGVtZW50cy9uYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
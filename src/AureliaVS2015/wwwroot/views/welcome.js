System.register([], function (_export) {
    'use strict';

    var Welcome;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            Welcome = (function () {
                function Welcome() {
                    _classCallCheck(this, Welcome);

                    this.heading = 'Welcome to the Aurelia Navigation App!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                }

                _createClass(Welcome, [{
                    key: 'fullName',
                    get: function () {
                        return '' + this.firstName + ' ' + this.lastName;
                    }
                }, {
                    key: 'welcome',
                    value: function welcome() {
                        alert('Welcome, ' + this.fullName + '!');
                    }
                }]);

                return Welcome;
            })();

            _export('Welcome', Welcome);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3dlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQWEsT0FBTzs7Ozs7Ozs7O0FBQVAsbUJBQU87QUFDTCx5QkFERixPQUFPLEdBQ0g7MENBREosT0FBTzs7QUFFWix3QkFBSSxDQUFDLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQztBQUN4RCx3QkFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN6Qjs7NkJBTFEsT0FBTzs7eUJBT0osWUFBRTtBQUNWLG9DQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztxQkFDL0M7OzsyQkFFTSxtQkFBRTtBQUNMLDZCQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO3FCQUN2Qzs7O3VCQWJRLE9BQU87OzsrQkFBUCxPQUFPIiwiZmlsZSI6InZpZXdzL3dlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==
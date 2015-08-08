"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Toto = (function () {
	function Toto(a) {
		_classCallCheck(this, Toto);

		this.a = a;
	}

	_createClass(Toto, [{
		key: "getA",
		value: function getA() {
			return this.a;
		}
	}]);

	return Toto;
})();

;

var Titi = (function (_Toto) {
	function Titi(a, b) {
		_classCallCheck(this, Titi);

		_get(Object.getPrototypeOf(Titi.prototype), "constructor", this).call(this, a);

		var priv = 5;
		this.b = b;
	}

	_inherits(Titi, _Toto);

	_createClass(Titi, [{
		key: "getPriv",
		value: function getPriv() {
			console.log("priv " + priv);
		}
	}, {
		key: "setPriv",
		value: function setPriv(priii) {
			priv = priii;
		}
	}, {
		key: "getB",
		value: function getB() {
			return this.a;
		}
	}, {
		key: "getA",
		value: function getA() {
			return _get(Object.getPrototypeOf(Titi.prototype), "getA", this).call(this) + " aa   ";
		}
	}, {
		key: "getAll",
		value: function getAll() {
			return [this.getA(), this.getB()];
		}
	}]);

	return Titi;
})(Toto);

;

var truc = new Titi();
truc.getPriv();
truc.setPriv(51);
truc.getPriv(51);


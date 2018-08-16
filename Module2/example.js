"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SomeClass = /** @class */ (function () {
    function SomeClass(param) {
        var _this = this;
        this.someNumber = 6;
        this.someThingPrivate = 13;
        this.someMethod = function () {
            _this.someNumber = 5;
        };
        this.someElement = param;
    }
    Object.defineProperty(SomeClass.prototype, "GetMethod", {
        get: function () {
            return this.someNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SomeClass.prototype, "SetMethod", {
        set: function (param) {
            this.someNumber = param;
        },
        enumerable: true,
        configurable: true
    });
    return SomeClass;
}());
var ExtendedClass = /** @class */ (function (_super) {
    __extends(ExtendedClass, _super);
    function ExtendedClass(param) {
        var _this = _super.call(this, param) || this;
        _this.someOtherMethod = function (number, element) {
            _this.someNumber = number;
            _this.someElement = element;
            //can't do this because it is private
            //this.someThingPrivate;
        };
        return _this;
    }
    return ExtendedClass;
}(SomeClass));
var thisElement = document.createElement('div');
var instanceOfExtendedClass = new ExtendedClass(thisElement);
instanceOfExtendedClass.someNumber;
var valueOfMethod = instanceOfExtendedClass.someOtherMethod(4, thisElement);
var newInstance = new SomeClass(thisElement);

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var component_1 = require("./component");
var Route1 = /** @class */ (function (_super) {
    __extends(Route1, _super);
    function Route1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return (React.createElement("div", null,
                "Hello world from route 1=  ",
                _this.props.route,
                React.createElement(component_1.ComponentTest, null)));
        };
        return _this;
    }
    return Route1;
}(React.Component));
exports.Route1 = Route1;
//# sourceMappingURL=index.js.map
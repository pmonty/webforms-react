"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var server_1 = require("react-dom/server");
var Route1_1 = require("./Route1");
var Route2_1 = require("./Route2");
var component_1 = require("./Route1/component");
global.React = react_1.default;
global.ReactDOM = react_dom_1.default;
global.ReactDOMServer = server_1.default;
global.Route1 = Route1_1.Route1;
global.Route2 = Route2_1.Route2;
global.ComponentTest = component_1.ComponentTest;
//# sourceMappingURL=index.js.map
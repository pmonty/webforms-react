import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { Route1 } from './Route1'
import { Route2 } from './Route2'
import { ComponentTest } from './Route1/component'

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.Route1 = Route1;
global.Route2 = Route2;
global.ComponentTest = ComponentTest;

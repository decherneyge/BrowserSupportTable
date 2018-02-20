import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import fileSaver from 'file-saver';

import routes from './app.routes';

//import app functionality
import './services';

import './components';
import './features/home';

const requires = [
    'ui.router',
    'app.services',
    'app.components',
    'app.home'
];


angular.module('browserSupportApp', requires)
    .config(routes);

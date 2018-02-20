import angular from 'angular'
import uirouter from '@uirouter/angularjs';

let homeModule = angular.module('app.home',[uirouter]);


import routes from './home.routes.js'
homeModule.config(routes);

import homeComponent from './home.component';
homeModule.component('home', homeComponent);

export default homeModule;

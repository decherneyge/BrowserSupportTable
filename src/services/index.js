import angular from 'angular'
import {CommonService} from './common.service';

let servicesModule = angular.module('app.services', []);

    servicesModule.service('CommonService', CommonService);

export default servicesModule;
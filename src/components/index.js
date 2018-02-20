import angular from 'angular'
import browserListComponent from './browserChecklist/browser-checklist.component';
import browserTableComponent from './browserTable/browser-table.component';
import browserCheckBox from './browser-checkbox';
import domImage from './dom-image';

let componetsModule = angular.module('app.components',[]);

componetsModule.component('browserCheckBox', browserCheckBox);
componetsModule.component('browserCheckList', browserListComponent);
componetsModule.component('browserTable', browserTableComponent);
componetsModule.component('domImage', domImage);

export default componetsModule;

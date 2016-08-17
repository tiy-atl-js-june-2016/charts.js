import angular from 'angular';
import 'chart.js';
import 'angular-chart.js';

import {MainController} from './main.controller';

angular
  .module('app', ['chart.js'])
  .controller('MainController', MainController);
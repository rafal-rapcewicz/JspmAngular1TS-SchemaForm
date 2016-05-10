/// <reference path="../typings/_all.d.ts" />

import * as angular from 'angular';
import 'angular-sanitize';
import 'bootstrap';
import 'objectpath';
import 'tv4';
import 'angular-schema-form';
import 'angular-schema-form-bootstrap';
import 'angular-ui-router';
import SchamaFormBasicUsageController from './schemaForms/schamaFormBasicUsage.controller';

angular.module('TypeScriptUMDExample', ['ngSanitize', 'schemaForm'])
    .controller('exampleController', SchamaFormBasicUsageController)
    .config(['schemaFormProvider', schemaFormProvider => {
        schemaFormProvider.postProcess(form => {
            form.reverse();
            return form;
        })
    }]);
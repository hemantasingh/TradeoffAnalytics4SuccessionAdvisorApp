/**
 * Copyright 2014-2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var express = require('express'),
    tradeoffAnalyticsConfig = require('./tradeoff-analytics-config');

var app = express();
app.use('/',express.static(__dirname + '/public'));

// For local development, copy your service instance credentials here, otherwise you may ommit this parameter
var serviceCredentials = {
  username: 'b9e9fd4e-d8b8-4884-ad24-093bfab370cc',
  password: 'VmMkaSpuPWQH'
}
// When running on Bluemix, serviceCredentials will be overriden by the credentials obtained from VCAP_SERVICES
tradeoffAnalyticsConfig.setupToken(app, serviceCredentials); 

// to communicate with the service using a proxy rather then a token, add a dependency on "body-parser": "^1.15.0" 
// to package.json, and use:
// tradeoffAnalyticsConfig.setupProxy(app, serviceCredentials);

var port = process.env.VCAP_APP_PORT || 2000;
app.listen(port);
console.log('listening at:', port);

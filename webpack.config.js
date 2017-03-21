/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let env = 'dev';

switch (process.env.NODE_ENV) {
   case 'prod':
   case 'production':
      env = 'prod';
      break;
   case 'test':
   case 'testing':
      env = 'test';
}

let config = {
   devServer: require('./config/webpack/dev-server'),
   entry: require('./config/webpack/entry.'+env),
   module: {
      rules: require('./config/webpack/rules')
   },
   performance: {
      hints: false
   },
   output: require('./config/webpack/output'),
   plugins: require('./config/webpack/plugins'),
   resolve: require('./config/webpack/resolve')
};

module.exports = config;

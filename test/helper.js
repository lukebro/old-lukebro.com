global.chai = require('chai');
global.chaiHttp = require('chai-http');
global.app = require('../app');

chai.should();
chai.use(chaiHttp);
global.request = chai.request(app);

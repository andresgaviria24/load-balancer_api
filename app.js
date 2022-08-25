const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const app = express();
var morgan = require('morgan');
app.use(morgan('dev')); 

const purchase = require('./api/controllers/purchase/routes');
const { instance } = require('./api/controllers/purchase/index');

router.use('/purchase',purchase);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.get('/ping', (req, res) => res.send('pong'))

app.listen("400"+instance);
console.log("Listining at","400"+instance)
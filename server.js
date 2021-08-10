const http = require('http');
const app = require('./app');
const router  = require("./router");
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",router);


app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);


server.listen(process.env.PORT || 3000);
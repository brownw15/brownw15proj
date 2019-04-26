const express = require('express');
const app = express();
const path = require('path');
//const bodyParser = require('body-parser');
const port = 8000;

const sequelize = require('./utils/sequelize');
const Product = require('./models/Product');

app.use('/',express.urlencoded({extended:false}));
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/productAdmin');

app.use('/' ,express.static('public'));
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/admin/products', adminRouter);
//app.use(bodyParser.urlencoded({ extended : false}));


sequelize.authenticate()
.then(()=>{
	console.log("Successful Auth");
	app.listen(port);

sequelize.sync()
  //sequelize.sync({force:true})
		.then(()=> {
			console.log('Successfully Synced');
		})
		.catch((err)=>{
			console.log('Failure', err);
		});
})
.catch((err)=>{
  console.log("Could not authenticate:", err);
});

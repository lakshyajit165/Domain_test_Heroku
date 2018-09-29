const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

//HandleBars Middleware
app.engine('handlebars', 
	exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Static folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

//index route
app.get('/', (req,res)=>{
	res.render('index');
});

app.listen(process.env.PORT || 3000, () => console.log('Server Started...'));
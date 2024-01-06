import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebrouter from './route/web'

require('dotenv').config()
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
viewEngine(app);
initWebrouter(app);


let port = process.env.PORT || 6969;
app.listen( port ,()=> {
	console.log('Connect thành công tại PORT: '+ port)
})
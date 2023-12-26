import express from 'express'
let router = express.Router();

let initWebrouter = (app)=>{
	router.get('/',(req,res)=>{
		return res.send('hello ndmc')
	});
	return app.use('/',router);
}
module.exports = initWebrouter
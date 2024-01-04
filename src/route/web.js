import express from 'express'
import homeController from '../controllers/homeController';
let router = express.Router();

let initWebrouter = (app)=>{
	router.get('/', homeController.getHomePage)

	router.get('/dangky',homeController.dangky)
	router.post('/postdangky',homeController.postdangky)

	router.get('/dangnhap',homeController.dangnhap)
	router.post('/postdangnhap',homeController.postdangnhap)



	
	router.get('/alluser',homeController.alluser)
	router.get('/edituser',homeController.edituser)
	router.post('/updatedone',homeController.updatedone)
	router.get('/deleteuser',homeController.deleteuser)

	return app.use('/',router);
}
module.exports = initWebrouter
import userservice from '../services/userservice';

let getHomePage =( req,res)=>{
	return res.render('homepage.ejs')
}
let dangky = (req,res)=>{
	return res.render('dangky.ejs')
}
let postdangky = async(req,res)=>{
	 await userservice.dangkyservice(req.body)
  
	return res.redirect('/alluser')
}
let dangnhap = (req,res)=>{
	return res.render('dangnhap.ejs')
}
let postdangnhap = async(req,res)=>{
	console.log(req.body)
	 let data= await userservice.dangnhapservice(req.body)
	 let a = req.body.mod
	 let user = await userservice.getuserbyphone(req.body.phone)
	if( data) {
		if( a==='2'){
			return res.render('./home/benhnhan.ejs',
			{dataTable: user})

		}else if( a==='1'){
			return res.render('./home/bacsi.ejs',
			{dataTable: user})


		}else if( a==='0'){
			return res.render('./home/admin.ejs',
			{dataTable: user})
		}
		
	}else{

	return res.send("Đăng nhập lại")
	}


}

let alluser = async(req,res)=>{
	let data = await userservice.alluser()
	return res.render('alluser.ejs',{dataTable: data})
}
let edituser= async(req,res)=>{
	let userid = req.query.id
	if( userid){
		let userdata= await userservice.getuserbyid(userid)
	
		return res.render('edituser.ejs',{
			user: userdata
		})
	}else{
		return res.send('khong co gi')
	}
}
let updatedone = async(req,res)=>{
	await userservice.edituser(req.body)
	return res.redirect('/alluser')
}
let deleteuser = async(req,res)=>{
	let userid = req.query.id
	if( userid){
		await userservice.deleteuser(userid)
		return res.redirect('/alluser')
	}else{
		return res.send('khong co gi dauuuuu')
	}
} 
module.exports = {
	getHomePage : getHomePage,
	dangky : dangky,
	postdangky: postdangky,
	alluser : alluser,
	edituser: edituser,
	updatedone: updatedone,
	deleteuser: deleteuser,
	dangnhap: dangnhap,
	postdangnhap: postdangnhap,




}
import db from '../models/index';

let dangkyservice = async(data)=>{
	return new Promise(async(resolve,reject)=>{
		try{
			await db.User.create({
				phone: data.phone,
         		name: data.name,
         		address: data.address,
         		email: data.email,
         		password: data.password,
         		description: data.description,
         		gender: data.gender==='1' ? "Nam" : "Nữ" ,
			})
			resolve(data)
		}catch(e){
			reject(e);
		}
	})
}
let dangnhapservice = async(data)=>{
	return new Promise(async(resolve,reject)=>{
		try {
			 let user = await db.User.findOne({
				where:{phone: data.phone,roleID: data.mod},
			})
			if(!user){
				
				resolve(false)
			}else{
				if( user.password === data.password ){
					resolve(true)
					
				}else{
					
					resolve(false)
				}
			}
		}catch(e){
			reject(e)
		}
	})
}

let alluser =()=>{
	return new Promise(async(resolve,reject)=>{
		try{
			let users=db.User.findAll({
				raw: true,
			})
			resolve(users)
		}catch(e){
			reject(e)
		}
	})
}
let getuserbyid=(userid)=>{
	return new Promise ( async(resolve,reject)=>{
		try {
			let user = await db.User.findOne({
				where:{ id: userid},
				raw: true,
			})
			if( user){
				resolve(user)
			}else{
				resolve('khong co ')
			}
		}catch(e){
			reject(e)
		}
	})
}
let  edituser =(data)=>{
	return new Promise(async(resolve,reject)=>{
		try{
			let user = await db.User.findOne({
				where:{id: data.id},
				
			})
			if(user){
				user.phone= data.phone;
         		user.name= data.name;
         		user.address= data.address;
         		user.email= data.email;
         		user.password= data.password;
         		user.description= data.description;
         		user.gender= data.gender==='1' ? "Nam" : "Nữ" ;
				await user.save();
				resolve()
			}else{
				resolve()
			}
			
		}catch(e){
			reject(e)
		}
	})

}
let deleteuser = (userid)=>{
	return new Promise(async(resolve,reject)=>{
		try {
			let user = await db.User.findOne({
				where:{ id: userid},
				
			})
			if(user){
				await user.destroy()
			}resolve()
		}catch(e){
			reject(e)
		}
	})
}
module.exports={
 	dangkyservice: dangkyservice,
	alluser: alluser,
	edituser: edituser,
	getuserbyid: getuserbyid,
	deleteuser: deleteuser,
	dangnhapservice: dangnhapservice,
	


}
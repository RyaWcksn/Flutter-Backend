'use strict'
const User = use ('App/Models/User')

class UserController {
	async login ({ request, auth, response }) {
    const { email, password } = request.all()
    try {
    	if (await auth.attempt(email, password)) {
    		const user = await User.findBy('email', email)
    		const token = await auth.generate(user)

    		Object.assign(user, token)
    		return response.json(user)
    	};
    }
    catch(e) {
    	console.log(e)
    	return response.json({message: 'Kamu tidak terdaftar,Silahkan daftar'})
    }
  }
  	async getPosts({request, response}) {
    const posts = await Post.query().with('user').fetch()
	return response.json(posts)
  }
  	async register({request, auth, response}) {
	let user = await User.create(request.all())
    //generate token buat user
    let token = await auth.generate(user)
    Object.assign(user, token)
    return response.json(user)
  }
}

module.exports = UserController

'use strict'
const Post = use ('App/Models/Post')


class PostController {
	async index ({ request, response }) {
	const post = await Post.query().with('user').fetch()
	return response.json(post)
	}
	async store ({ request, auth, response }) {
		try	{
			const post = await auth.user.post().create(request.all())
			await post.load('user')
			return response.json(post)
		}
		catch (e) {
			console.log(e)
			return response.json({message: 'Kamu gak berhak menambah postingan karena bukan pemilik akun ini'})
		}
	}
	async update ({ auth, params, response }) {
		const post = await post.find(params.id)
		post.title = request.input('Title')
		post.posts = request.input('Post')

		await post.save()
		await post.load(user)

		return response.json(post)
	}
	async delete ({ auth, params, response }) {
		await Post.find(params.id).delete()
		return response.json({message: 'post di hapus'})
	}
}

module.exports = PostController

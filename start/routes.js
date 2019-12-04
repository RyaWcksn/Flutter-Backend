'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('users/:id', 'UserController.show').middleware('auth')
Route.post('login', 'UserController.login')
Route.post('register', 'UserController.register')

Route.put('/posts/:id', 'PostController.update').middleware('auth')
Route.delete('posts/id', 'PostController.delete').middleware('auth')
Route.post('/posts', 'PostController.store').middleware('auth')
Route.get('/posts', 'PostController.getPosts');
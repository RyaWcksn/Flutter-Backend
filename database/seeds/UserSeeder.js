'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
  	const u1 = new User()
  	u1.username = 'Arya'
  	u1.access = 1
  	u1.password = 'Supervisor'
  	u1.email = 'arya1@mail.com'
  	await u1.save()
  }
}

module.exports = UserSeeder

const test = require('ava');
const request = require('supertest');
const app = require('../app')

// test('Create a new user', async t => {
//     t.plan(3);
//     const newUser = {
//         username: 'Ceren',
//         password: '1111'
//     }
//     const res = (await request(app)
//         .post('/user')
//         .send(newUser))

//     t.is(res.status, 200)
//     t.is(res.body.username, newUser.username)
//     t.is(res.body.password, newUser.password)
// })


// test('Register is successful', async t => {
//     t.plan(3)
//     const user = {
//         username: 'SolpanCeren',
//         password: '1234'
//     }
//     const res = await request(app)
//         .post('/user/register')
//         .send(user)
//     console.log(res.body)
//     t.is(res.status, 200)
//     t.is(res.body.username, user.username)
//     t.is(res.body.password, user.password)
// })


// test('Login is successful', async t => {
//     t.plan(3)
//     const user = {
//         username: 'CerenSolpan',
//         password: '123412'
//     }
//     const res = await request(app)
//         .post('/user/login')
//         .send(user)
//     console.log(res.body)
//     t.is(res.status, 200)
//     t.is(res.body.username, user.username)
//     t.is(res.body.password, user.password)
// })
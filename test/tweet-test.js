const test = require('ava');
const request = require('supertest');
const app = require('../app')


// test('Create a new tweet', async t => {
//     t.plan(3);
//     const newTweet = {
//         userid: '60316f99d016a032c8a1acad',
//         body: 'Hello Woorld!'
//     }
//     const res = (await request(app)
//         .post('/tweet/add')
//         .send(newTweet))

//     t.is(res.status, 200)
//     t.is(res.body.userid._id, newTweet.userid)
//     t.is(res.body.body, newTweet.body)
// })

test('Delete a tweet', async t => {
    t.plan(2);
    const tweet = {
        tweetid: '602ef1ceecd8f50cc827fce1',
    }
    const res = (await request(app)
        .post('/tweet/delete')
        .send(tweet))
    console.log(res.body);
    t.is(res.status, 200)
    t.is(res.body.tweetid, tweet.tweetid)
})

// test('Like a tweet', async t => {
//     t.plan(3);
//     const tweet = {
//         tweetid: '602ef2e8e46a572da83f3292',
//         userid: '602ee40575abd02c0c8e0cb5'
//     }
//     const res = (await request(app)
//         .post('/tweet/like')
//         .send(tweet))
//     console.log(res.body);
//     t.is(res.status, 200)
//     t.is(res.body.tweetid, tweet.tweetid)
//     t.is(res.body.userid, tweet.userid)
// })

// test('Delete like', async t => {
//     t.plan(3);
//     const tweet = {
//         tweetid: '602fb72f100f5b33c0fbc6d9',
//         userid: '602ee40575abd02c0c8e0cb5'
//     }
//     const res = (await request(app)
//         .post('/tweet/like/delete')
//         .send(tweet))
//     console.log(res.body);
//     t.is(res.status, 200)
//     t.deepEqual(res.body.tweetid, tweet.tweetid)
//     t.deepEqual(res.body.userid, tweet.userid)
// })

// test('Add a comment', async t => {
//     t.plan(3);
//     const tweet = {
//         tweetid: '602ef2e8e46a572da83f3292',
//         userid: '602ee40575abd02c0c8e0cb5',
//         body: 'Sunday!'
//     }
//     const res = (await request(app)
//         .post('/tweet/comment')
//         .send(tweet))
//     console.log(res.body);
//     t.is(res.status, 200)
//     t.is(res.body.tweetid, tweet.tweetid)
//     t.is(res.body.userid, tweet.userid)
// })

// test('Delete a comment', async t => {
//     t.plan(3);
//     const tweet = {
//         tweetid: '602fb72f100f5b33c0fbc6d9',
//         commentid: '602fd43b30736c13743ae62e'
//     }
//     const res = (await request(app)
//         .post('/tweet/comment/delete')
//         .send(tweet))
//     console.log(res.body);
//     t.is(res.status, 200)
//     t.is(res.body.tweetid, tweet.tweetid)
//     t.is(res.body.userid, tweet.userid)
// })
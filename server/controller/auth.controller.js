import mongoose from 'mongoose'

const auth = {}

auth.login = function(req, res, next){
  const username = req.bofy.username
  const password = req.bofy.password
  if(!username || !password){
    res.json({
      code: 400,
      msg: 'param invalid'
    })
  } else if (username == 'admin' && password == '11235') {
    res.json({
      code: 200,
      data: { username: 'admin', id: 1, avatar: null, email: 'a@b.com' }
    })
  } else {
    res.json({
      code: 401,
      msg: 'username or password invalid'
    })
  }
}
auth.register = function(req, res, next){
  res.send({ msg: 'register' })
}
auth.getUserInfo = function(req, res, next){
  res.send({msg: 'user info'})
}

export default auth
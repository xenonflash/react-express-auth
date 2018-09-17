import jwt from 'jsonwebtoken'
import UserModel from '../model/user.model'
import CONFIG from '../config'

const auth = {}

auth.login = function (req, res, next) {
  const username = req.body.username
  const password = req.body.password
  console.log(username, password)
  if (!username || !password) {
    res.json({
      code: 4000,
      msg: 'param invalid'
    })
  } else {
    console.log('query', username)
    UserModel.findOne({ name: username }, function (err, user) {
      if (err || !user) {
        res.json({ code: 4001, msg: 'username or password wrong' })
      } else {
        res.json({
          code: 200,
          data: jwt.sign({ iat: Date.now(), uid: user._id }, CONFIG.jwtSecret)
        })
      }
    })
  }
}
auth.register = function (req, res, next) {
  const { username, password, email } = req.body
  //检测是否重名
  UserModel.findOne({ name: username }, (err, user) => {
    if (user) res.json({ code: 4002, msg: 'username exists'})
  })
  // 创建一条记录
  const newUser = new UserModel({
    name: username,
    password,
    email,
    createDate: Date.now()
  })

  newUser.save((err, user) => {
    if (err || !user){
      res.json({code: 4003, msg: 'register fail, please try again'})
    } else {
      res.json({ code: 200, msg: 'success', data: user })
    }
  })
}

auth.getUserInfo = function (req, res, next) {
  res.json({
    code: 200,
    data: res.locals.$user
  })
}

export default auth
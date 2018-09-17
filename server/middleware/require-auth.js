import jwt from 'jsonwebtoken'
import User from '../model/user.model'
import CONFIG from '../config'

export default function (req, res, next) {
  const tk = req.headers['tk']
  if (!tk) {
    res.json({ code: 4004, msg: 'invalid status' })
  } else {
    const { uid, iat } = jwt.verify(tk, CONFIG.jwtSecret)
    if (!uid || isNaN(+iat)) {
      res.json({ code: 4004, msg: 'invalie passport' })
    } else if (Date.now() - iat >= 7 * 24 * 60 * 60 * 1000) {
      res.json({ code: 4004, msg: 'login expire' })
    } else {
      User.findOne({ _id: uid }, function (err, user) {
        if (err || !user) {
          res.json({ code: 4004, msg: 'user not found' })
        } else {
          res.locals.$user = user
          next()
        }
      })
    }
  }
}
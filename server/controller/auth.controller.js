const auth = {}

auth.login = function(req, res, next){
  res.json({msg: 'login'})
}
auth.register = function(req, res, next){
  res.send({ msg: 'register' })
}
auth.getUserInfo = function(req, res, next){
  res.send({msg: 'user info'})
}

export default auth
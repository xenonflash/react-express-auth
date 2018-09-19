import UserModel from '../model/user.model'
import CONFIG from '../config'

const user = {}

user.getContacts = function(req, res, next) {
  const data = [
    { id: '2324', name: '小明', avatar: '' },
    { id: '2323', name: '小红', avatar: '' },
    { id: '2322', name: '小黑', avatar: '' },
  ]
  res.json({
    code: 200,
    data
  })
}

export default user
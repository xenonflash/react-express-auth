import { makePost, makeGet } from './_api-helper'

const api = {}

api.getUserInfo = makeGet('/api/getUserInfo')
api.getContacts = makeGet('/api/getContacts')
api.updateUserInfo = makePost('/api/updateUserInfo')

export default api
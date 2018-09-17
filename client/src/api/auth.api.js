import { makePost, makeGet } from './_api-helper'

const api = {}

api.login = makePost('/api/login')
api.getUserInfo = makeGet('/api/getUserInfo')
api.register = makePost('/api/register')

export default api
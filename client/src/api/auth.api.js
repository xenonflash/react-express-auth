import { makePost } from './_api-helper'

const api = {}

api.login = makePost('/api/login')
api.register = makePost('/api/register')

export default api
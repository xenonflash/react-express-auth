import {sendWs} from './_api-helper'

const api = {}

api.sendMsg = msg => {
  return sendWs(msg)
}

export default api
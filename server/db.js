import mongoose from 'mongoose'

export function initDb(config) {
  return mongoose.connect(config.url, config.options)
}
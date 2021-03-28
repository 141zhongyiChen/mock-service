const Mock = require('mockjs')

export const success = (data) => {
  const result = Mock.mock({
    ...data
  })
  return {
    code: 0,
    message: '',
    data: {
      ...result
    }
  }
}

export const error = (code: number, message) => {
  return {
    code: 500,
    message: message,
    data: null
  }
}
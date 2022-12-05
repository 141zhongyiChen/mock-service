export const success = async <T>(data: T, message = '', delay = 2) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message,
        data: data
      })
    }, delay * 1000)
  })
}

export const error = (code: number, message) => {
  return {
    code: 500,
    message: message,
    data: null
  }
}
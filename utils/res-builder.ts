export const success = <T>(data: T, message = '') => {
  return {
    code: 0,
    message,
    data: data
  }
}

export const error = (code: number, message) => {
  return {
    code: 500,
    message: message,
    data: null
  }
}
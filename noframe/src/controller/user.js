const loginCheck = (username, password) => {
  if(username === 'kuma' && password === '123') {
    return true
  }else {
    return false
  }
}

module.exports = {
  loginCheck
}
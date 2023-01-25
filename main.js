function showData(url) {

  // Expressão regular para verificar se o link está no formato correto
  const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  
  if(urlRegex.test(url)){
    return true
  }
  return false;
}

module.exports = showData;

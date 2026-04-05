const configLocal = JSON.parse(open('../config/config.local.json'));

export function pegarBaseURL (){
  const baseURL = __ENV.BASE_URL  || configLocal.baseUrl
  console.log(baseURL)
  //poderia ser rerurn __ENV.BASE_URL  || 'http://localhost:3000' direto
  return baseURL
  
}


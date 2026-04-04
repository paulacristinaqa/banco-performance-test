import http from 'k6/http';
import {check, sleep } from 'k6';
const postlogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {   
  // stages: [
  //   { duration: '30s', target: 10 },
  //   { duration: '25s', target: 20 },
  //   { duration: '20s', target: 30 },
  //   { duration: '25s', target: 40 },
  //   { duration: '20s', target: 10 },
  // ],
  iterations:5,
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(90)<10', 'max< 40'], // 95% of requests should be below 200ms
  }
  
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  const url = 'http://localhost:3000/login';
  postlogin.username = "junior.lima"
  console.log(postlogin)
  const payload = JSON.stringify(postlogin);


  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };  

  const resposta = http.post(url, payload, params);
  

  // Verificações
  check(resposta, {
    'status é 200': (r) => r.status === 200,
    'retornou token': (r) => r.json('token') !== undefined,
    'tempo de resposta < 2s': (r) => r.timings.duration < 2000,
  });

  // Extrair token para usar em outras requisições
  if (resposta.status === 200) {
    const token = resposta.json('token');
    
    // Salvar token para uso em outros testes
  }

  sleep(1);
}

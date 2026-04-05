import http from 'k6/http';
import {check, sleep } from 'k6';
import { obterToken } from '../helpers/autenticacao.js'
const postTransfers = JSON.parse(open('../fixtures/postTransfers.json'));

export const option = {
  vus:100,
  duration:'1000s',
  //  stages: [
  //   { duration: '30s', target: 10 },
  //   { duration: '25s', target: 20 },
  //   { duration: '20s', target: 30 },
  //   { duration: '25s', target: 40 },
  //   { duration: '20s', target: 10 },
  // ],
   
   thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(90)<10', 'max< 40'], // 95% of requests should be below 200ms
  }
};

export default function (){
  const token = obterToken ()
  const url = 'http://localhost:3000/transferencias';
  console.log(token)
    
      const payload = JSON.stringify(postTransfers);
    
      const params = {
        headers: {
          'Content-Type': 'application/json',  
          'Authorization': 'Bearer ' + token  
      },
    };
   let resposta = http.post(url, payload, params);

   check(resposta, {
    'status é 201': (r) => r.status === 201,
    'retornou mensagem de transferência realizada com sucesso': (r) => r.json('message') === 'Transferência realizada com sucesso.',
    'tempo de resposta < 2s': (r) => r.timings.duration < 2000,

      });
sleep(1);      
};




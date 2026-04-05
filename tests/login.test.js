import http from 'k6/http';
import {check, sleep } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {   
  stages: [
    { duration: '30s', target: 10 },
    { duration: '25s', target: 20 },
    { duration: '20s', target: 30 },
    { duration: '25s', target: 40 },
    { duration: '20s', target: 10 },
  ],
   thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(90)<10', 'max< 40'], // 95% of requests should be below 200ms
  }
  
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {  
     const url = 'http://localhost:3000/login';
     // postlogin.username = "junior.lima"
      console.log(postLogin)
    
      const payload = JSON.stringify(postLogin);
    
      const params = {
        headers: {
          'Content-Type': 'application/json',    
      },
    };
         
      const resposta = http.post(url, payload, params);
      
      check(resposta, {
        'status é 200': (r) => r.status === 200,
        'retornou token': (r) => r.json('token') !== undefined,
        'tempo de resposta < 2s': (r) => r.timings.duration < 2000,
      });
 

  sleep(1);
}

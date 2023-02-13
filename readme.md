# infisical - pm2 cluster mode 와의 연계 오류
## 실행 환경
* nodejs (18.14.0)
* pm2 (5.2.2)
* infisical

### infisical secrets
```
express_port=7791
```

## 실행
```
$ npm install
$ pm2 start ecosystem.config.js
```

## 로그
> 1 인스턴스는 정상적으로 실행 되었으나 
> 0 인스턴스는 포트 점유로 인해 실행되지 않음 (pm2 cluster 모드에선 이를 자동으로 감지하여 load balancing 처리 함)
```
1|infisical-pm2-problem  | Injecting 38 Infisical secrets into your application process
1|infisical-pm2-problem  | 🤣 Server is running on port: 7791
0|infisical-pm2-problem  | Injecting 38 Infisical secrets into your application process
0|infisical-pm2-problem  | node:events:491
0|infisical-pm2-problem  |       throw er; // Unhandled 'error' event
0|infisical-pm2-problem  |       ^
0|infisical-pm2-problem  | Error: listen EADDRINUSE: address already in use :::7791
0|infisical-pm2-problem  |     at Server.setupListenHandle [as _listen2] (node:net:1740:16)
0|infisical-pm2-problem  |     at listenInCluster (node:net:1788:12)
0|infisical-pm2-problem  |     at Server.listen (node:net:1876:7)
0|infisical-pm2-problem  |     at Function.listen (/Users/minkihan/Documents/coda/infisical-pm2-problem/node_modules/express/lib/application.js:604:24)
0|infisical-pm2-problem  |     at Object.<anonymous> (/Users/minkihan/Documents/coda/infisical-pm2-problem/.build/app.js:15:5)
0|infisical-pm2-problem  |     at Module._compile (node:internal/modules/cjs/loader:1226:14)
0|infisical-pm2-problem  |     at Module._extensions..js (node:internal/modules/cjs/loader:1280:10)
0|infisical-pm2-problem  |     at Module.load (node:internal/modules/cjs/loader:1089:32)
0|infisical-pm2-problem  |     at Module._load (node:internal/modules/cjs/loader:930:12)
0|infisical-pm2-problem  |     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
0|infisical-pm2-problem  | Emitted 'error' event on Server instance at:
0|infisical-pm2-problem  |     at emitErrorNT (node:net:1767:8)
0|infisical-pm2-problem  |     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
0|infisical-pm2-problem  |   code: 'EADDRINUSE',
0|infisical-pm2-problem  |   errno: -48,
0|infisical-pm2-problem  |   syscall: 'listen',
0|infisical-pm2-problem  |   address: '::',
0|infisical-pm2-problem  |   port: 7791
0|infisical-pm2-problem  | }
0|infisical-pm2-problem  | Node.js v18.14.0
0|infisical-pm2-problem  | Hmm, we ran into an error: failed to wait for command termination: exit status 1
0|infisical-pm2-problem  | Unable to execute your single command
```
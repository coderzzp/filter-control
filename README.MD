### filter-control
filter the control code in ASSCII Characters,see : https://zh.wikipedia.org/wiki/%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6 for more detail

### use
```shell
npm i filter-control
```
```javascript
// demo
const filterControl = require('../src/index.js')
// or something user input
const str = 'abc\ndef'
// \n got filtered
const res= filterControl(str)
```
### demo
```shell
node ./demo/index.js
```

### test
```shell
npm run test
```

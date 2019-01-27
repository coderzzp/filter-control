const filterControl = require('../src/index.js')
const str = 'abc\ndef'
console.log(`before filter->${str}`)
const res= filterControl(str)
console.log(`after filter->${res}`)
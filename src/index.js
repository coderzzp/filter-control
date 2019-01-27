module.exports = str =>{
  if(typeof str !=='string'){
    throw new Error('请传入一个字符串')
  }else{
    // 控制字符的ASSCII码：
    const controlCodeList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127]
    let transStr
    transStr = Array.prototype.filter.call(str,m=>{
      return !controlCodeList.includes(m.charCodeAt(0))
    }).join('')
    return transStr
  }
}
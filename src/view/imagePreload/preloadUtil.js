/**
 * promise
 * @param {*} url 
 * @returns 
 * 基本的图片预加载 
 */
const imgPreloader = url => {
    return new Promise((resolve, reject) => {
      //新建image对象去加载url
      let temp = new Image();
      temp.src = url
      temp.onload = () => {
        //加载完成 执行resolve
        window.console.log('onload')
        resolve('true');
      };
      temp.onerror = () => {
        window.console.log('onerror')
        reject('false');
      };
      //清除image对象 
      temp=null
    });
}

/**
 * promise.all并行响应
 * @param imgs 图片路径数组
 * @returns {Promise<unknown[]>}
 */
const allImgPreloader = imgs => {
  let promiseArr = new Array()
  imgs.forEach(url => {
    //所有加载promise
    promiseArr.push(imgPreloader(url))
  })
  //执行结果
  return Promise.all(promiseArr)
}

export default allImgPreloader

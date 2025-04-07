function mockRequest(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('url index:',`${url}:: ${index}`)
            console.log('url:',url)
            resolve({ url })
        }, Math.random() * 1000)
    })
}
const task = async (url) => {  
    console.log(`Fetching ${url}`);  
    const response = await mockRequest(url);
    console.log('response:',response)
    // return response.json();  
  };  
  
  const urls = ['url1', 'url2', 'url3'];  
const promises = urls.map(url => task(url));  
  
async function test() {
    const firstResult = await Promise.race(promises);  
    console.log('First result:', firstResult);  
}
  
  // 第一次调用 race  
test();
test();
   
  
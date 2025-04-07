// 并发控制

// 一次最多同时请求limit个接口，只要有一个返回，就继续请求下一个

// 模拟请求
function mockRequest(url, index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('url index:',`${url} ---- ${index}`)
            resolve({ url, index })
        }, Math.random() * 1000)
    })
}

async function limitRequest(urls, limit) {
    let results = [];
    let set = new Set();
    for (let i = 0; i < urls.length; i++) {
        if (set.size >= limit) { 
            console.log('set set:',set)
            await Promise.race(set); // Promise.race只是监听里面的promise，只要有一个完成，就返回，多次调用Promise.race，不会重复执行接受的promises参数
        }
        const promise = new Promise((resolve) => {
            const wrapperCall = async () => {
                const result = await mockRequest(urls[i], i);
                results[result.index] = result
                set.delete(promise);
                resolve(result);
            }
            wrapperCall();
        })

        set.add(promise)
    }
    await Promise.all(set); // 处理剩下的 promises
    console.log('results:',results)
    return results;
}

let urls = ['/ddd/1', '/ff/2', '/gg/3', '/hh/4', '/jj/5', '/kk/6', '/ll/7', '/mm/8', '/nn/9', '/oo/10', '/pp/11']

// let tasks = urls.map((url, index) => {
//     return async () => {
//         return await mockRequest(url, index)
//     }
// })

limitRequest(urls, 3)
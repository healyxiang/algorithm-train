function mockRequest(url,index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('url index:',`${url}:: ${index}`)
            resolve({ url, index })
        }, Math.random() * 1000)
    })
}

async function concurrentControl(tasks, limit) {  
    const results = [];  
    const executing = new Set(); // 存储正在等待响应的 Promise  

    for (const task of tasks) {  
        // 如果当前并发数达到限制，等待其中一个任务完成  
        if (executing.size >= limit) {  
            await Promise.race(executing);  
        }  

        // 创建一个 Promise，但不会立即执行 task()  
        const promise = new Promise((resolve) => {
            // 将任务包装为函数，延迟执行  
            const wrappedTask = async () => {  
                const result = await task(); // 真正执行任务（如 fetch）  
                // results.push(result);  
                results[result.index] = result
                executing.delete(promise);  
                resolve(result);  
            };  
            wrappedTask(); // 触发任务执行  
        });  

        executing.add(promise); // 将 Promise 加入执行集合  
    }  

    // 等待所有剩余任务完成  
    await Promise.all(executing);  
    console.log('results:',results)
    return results;  
}  

let urls = ['/ddd/1', '/ff/2', '/gg/3', '/hh/4', '/jj/5', '/kk/6', '/ll/7', '/mm/8', '/nn/9', '/oo/10', '/pp/11']

let tasks = urls.map((url, index) => {
    return async () => {
        return await mockRequest(url, index)
    }
})

concurrentControl(tasks, 3)
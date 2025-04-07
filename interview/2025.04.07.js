/* 
1. 写一个函数完成以下功能，给一个非负整数，判断其转换为二进制后，等于1的位数有几个，比如1234，
转换为二进制是10011010010，1一共有5个，就输出5。
*/

function countBinaryOnes1(num) {
    const binaryStr = num.toString(2);
    return binaryStr.split('1').length - 1;
}

// console.log(countBinaryOnes1(1234)); // 输出: 5

function countBinaryOnes2(num) {
    let count = 0;
    while (num > 0) { 
        count += num & 1;
        num >>= 1;
    }
    return count
}

// console.log(countBinaryOnes2(1234)); // 输出: 5

/* 
2. 给一个日期字符串，"2021/12/25"，接受一个参数n，如果n早于这个日期，就输出before，等于就输出now，大于就输出after，n的格式也是字符串，形如"2022/01/22"
*/

function compareToDate(n) {
    const target = '2021/12/25';
    const input = new Date(n).getTime();
    const targetDate = new Date(target).getTime();

    if (input < targetDate) {
        return 'before';
    } else if (input === targetDate) {
        return 'now';
    } else {
        return 'after';
    }

}

// console.log(compareToDate('2021/12/26'));

function validateJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        console.log(error.message);
        return error.message.match(/position (\d+)/)[1]; // 第一个捕获组(\d+) 就是位置
    }
}

console.log(validateJSON('{"a":123}')); // 输出: true
console.log(validateJSON('{"a":123]')); // 输出: 8

function isSameTree(p, q) {
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/* 
跳房子，给定一个房子的距离n，一次只能跳1格 、2格 、3格，要注意的是，当前跳跃的格数不能等于上次跳转的格数，就是不能2、2这样跳，只能2、1、2或者2、3、2，输出要跳到n格一共有多少种跳法
*/

function jumpHouse(n, lastJump = 0) {  
    if (n === 0) {  
        return 1; // 成功到达目标  
    }  
    if (n < 0) {  
        return 0; // 无法到达目标  
    }  

    let total = 0;  
    for (let step = 1; step <= 3; step++) {  
        if (step !== lastJump) {  
            total += jumpHouse(n - step, step);  
        }  
    }  
    return total;  
}  

console.log('jumpHouse(n):',jumpHouse(4)); // jumpHouse(4)
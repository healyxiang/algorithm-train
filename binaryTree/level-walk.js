// 二叉树层序遍历
import { getHeight } from './bst-height'

// 层序遍历递归实现
function levelWalk(root) {
    const height = getHeight(root)

    for (let i = 1; i <= height; i++) {
        walkCurLevel(root, i)
    }
}

function walkCurLevel(root, i) {
    if (!root) {
        return
    }
    if (i === 1) {
        console.log(root.val)
    }
    if (i > 1) {
        walkCurLevel(root.left, i - 1)
        walkCurLevel(root.right, i - 1)
    }
}

// 层序遍历迭代实现
/**
 *  使用一个队列来存放遍历的节点，通过判断队列长度，即为该层中节点个数 
 *  从队列中取出元素时，不是一次取一个，而是取出一层中的元素
 */
var levelOrder = function(root) {
    let res = []
    if (!root) {
        return res
    }
    let queue = []
    queue.push(root)
    while (queue.length) {
        let resSize = res.length;
        res[resSize] = []
        let size = queue.length // size即为当前层的节点个数
        while (size--) {
            let cur = queue.shift()
            res[resSize].push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return res;
};
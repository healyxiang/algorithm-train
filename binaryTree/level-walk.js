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
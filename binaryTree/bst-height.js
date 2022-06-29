// 求二叉树高度

export function getHeight(root) {
    //递归求解
    // 根节点高度算了1
    if (!root) {
        return 0
    }
    return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}


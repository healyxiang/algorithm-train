class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 中序遍历 非递归
function inorderBinaryTree(root) {
    let cur = root
    let stack = []
    let res = []

    while (cur !== null || stack.length) {
        while (cur !== null) {
            stack.unshift(cur)
            cur = cur.left
        }
        cur = stack.shift()
        res.push(cur.val)
        cur = cur.right
    }
    return res
}
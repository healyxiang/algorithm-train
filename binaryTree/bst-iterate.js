// 二叉树迭代遍历

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
  /**
   * 使用root作为current指针
   *
   */
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left; // 不断将当前节点的左子树放进栈中
    }
    // root为null说明最后放进栈中的节点是：1. 一个叶子节点 或 2.没有左子树的父节点。应该被弹出栈，将val放入res
    root = stk.pop();
    res.push(root.val);
    root = root.right; // 此时当前节点的右子树对应两种情况: 1. right为null 2.right存在，为下一个应放入栈中的节点
  }
  return res;
}

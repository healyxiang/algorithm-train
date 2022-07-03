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

/**
 * 后序遍历 非递归 左右中 是三种遍历中最难的，同样使用栈来记录节点，但是需要注意的是：
 * 后序遍历的“中节点”可能会经历入栈，弹出，重新入栈，故需要使用Prev指针记录之前访问过的节点，通过判断current.right === prev?来防止重复添加节点到栈中
 */

function pastOrderBinaryTree(root) {
  /**
   * 使用root作为current指针
   *
   */
  const res = [];
  const stk = [];
  let prev = root;
  while (stk.length || root) {
    // 栈不为空 或 current存在时循环遍历
    while (root) {
      // current存在，且左子树存在
      stk.unshift(root);
      root = root.left;
    }
    root = stk.shift(); // current无左子树，从栈顶弹出一个节点处理
    if (!root.right || root.right === prev) {
      // 1. 无右子树
      // 2. 右子树已经遍历过了
      // 两种情况均将current的值放入res；同时将current标记为Prev,方便下次遍历时判断；将current标记为null，使得下一个遍历从栈中弹出
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      stk.unshift(root);
      root = root.right;
    }
  }

  return res;
}

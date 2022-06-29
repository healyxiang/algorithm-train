/*
二叉树遍历 递归写法
递归遍历相对来说较为简单，通过调整遍历当前节点，递归左右孩子节点的顺序来实现 前中后 三种顺序的遍历

递归三要素：
1. 确定递归函数的参数和返回值： 确定哪些参数是递归的过程中需要处理的，那么就在递归函数里加上这个参数， 并且还要明确每次递归的返回值是什么进而确定递归函数的返回类型。

2. 确定终止条件： 写完了递归算法, 运行的时候，经常会遇到栈溢出的错误，就是没写终止条件或者终止条件写的不对，操作系统也是用一个栈的结构来保存每一层递归的信息，如果递归没有终止，操作系统的内存栈必然就会溢出。

3. 确定单层递归的逻辑： 确定每一层递归需要处理的信息。在这里也就会重复调用自己来实现递归的过程。
*/

// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/
class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

// Root of Binary Tree
var root = null;

/*前序遍历 */
/* Given a binary tree, print its nodes in preorder*/
function printPreorder(node) {
    if (node == null)
        return;

    /* first print data of node */
    // 对当前节点处理逻辑
    document.write(node.key + " ");

    /* then recur on left subtree */
    printPreorder(node.left);

    /* now recur on right subtree */
    printPreorder(node.right);
    
}

/*中序遍历 */
/* Given a binary tree, print its nodes in inorder*/
function printInorder(node) {
    if (node == null)
        return;

    /* first recur on left child */
    printInorder(node.left);

    /* then print the data of node */
    // 对当前节点处理逻辑
    document.write(node.key + " ");

    /* now recur on right child */
    printInorder(node.right);
}

/*后序遍历 */
/*
* Given a binary tree, print its nodes according to the "bottom-up" postorder
* traversal.
*/
function printPostorder(node) {
    if (node == null)
        return;

    // first recur on left subtree
    printPostorder(node.left);

    // then recur on right subtree
    printPostorder(node.right);

    // now deal with the node
    // 对当前节点处理逻辑
    document.write(node.key + " ");
}

// Driver method


    root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);

    document.write("Preorder traversal of binary tree is <br/>");
    printPreorder(root);

    document.write("<br/>Inorder traversal of binary tree is <br/>");
    printInorder(root);

    document.write("<br/>Postorder traversal of binary tree is <br/>");
    printPostorder(root);

// This code is contributed by aashish1995

// 二叉树的中序遍历

var inorderTraversal = function(root) {
    if (root) {
        　 console.log(root.left)
           console.log(root.right)
       return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    } else {
       return []
    }
};
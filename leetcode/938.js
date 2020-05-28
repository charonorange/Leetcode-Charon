// 二叉搜索树的范围和

// 最后试了一个php居然就可以
// class Solution {
//     /**
//      * @param TreeNode $root
//      * @param Integer $L
//      * @param Integer $R
//      * @return Integer
//      */
//     function rangeSumBST($root, $L, $R) {
//         if ($root == null) return 0;

//         if ($root->val > $R) {
//             return $this->rangeSumBST($root->left, $L, $R);
//         } elseif ($root->val < $L) {
//             return $this->rangeSumBST($root->right, $L, $R);
//         } else {
//             return $root->val + $this->rangeSumBST($root->left, $L, $R) + $this->rangeSumBST($root->right, $L, $R);
//         }
//     }
// }


//  又是一个暴力超时的
var rangeSumBST = function(root, L, R) {
    if(!root)return 0  
    let v = (root.val <= R && root.val >= L)? root.val : 0
    return v + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
};
// 所有可能的满二叉树

var allPossibleFBT = function(N) {
    var map = new Map()
    if (!map.has(N)) {
         var arr = []
         if (N === 1) {
             arr.push(new TreeNode(0))
         } else if (N % 2 === 1){
             for (var i = 0; i < N ;i++) {
                 const j = N - i - 1
                 var leftNode = allPossibleFBT(i)
                 var rightNode = allPossibleFBT(j)
                 leftNode.forEach(left => {
                     rightNode.forEach(right => {
                         const node = new TreeNode(0)
                         node.left = left
                         node.right = right
                         arr.push(node)
                     })
                 })
             }
         }
         map.set(N, arr)
    }
    return map.get(N)
 };
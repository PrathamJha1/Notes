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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let ans = 0
    function recur(root){
        if(!root){
            return [0,0]
        }
        const [leftSum, leftCount] = recur(root.left)
        const [rightSum, rightCount] = recur(root.right)
        if(Math.floor((leftSum + rightSum + root.val)/ (leftCount + rightCount + 1)) === root.val){
            ans += 1
        }
        return [leftSum + rightSum + root.val , leftCount + rightCount + 1]
    }
    recur(root)
    return ans 
};
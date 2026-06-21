/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
     
    let i = 1;

    function dfs(root : TreeNode | null): number{

        if (!root) return 0;

        const l = dfs(root.left);
        const r = dfs(root.right);

        if(Math.abs(r - l) > 1){
            i = 0;
        }

        return 1 + Math.max(l, r);
    }

    dfs(root);

    return i == 1 ? true : false;
    
};
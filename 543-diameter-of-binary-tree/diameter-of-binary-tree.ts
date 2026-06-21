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

function diameterOfBinaryTree(root: TreeNode | null): number {

    let ans = -10;

    function dfs(root: TreeNode | null): number {

        if (!root) return 0;

        const l = dfs(root.left);
        const r = dfs(root.right);

        console.log(l, r);
        ans = Math.max(l + r, ans);

        return 1 + Math.max(l, r);

    }

    const height = dfs(root);


    //console.log(height, ans);
    return ans;
};
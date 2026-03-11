/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {


    let stack = []

    asteroids.forEach(function (num, index) {
        //console.log(num)

        if (num >= 0) {
            stack.push(num)
        }
        else {

            if (stack.length === 0) {
                stack.push(num)
            }
            else {

                top = stack[stack.length - 1]

                let push = 0
                let lastPopped = null

                while (top > 0 && top + num <= 0) {

                    lastPopped = top
                    stack.pop();
                    push = 1
                    top = stack[stack.length - 1]
                    if (lastPopped +  num == 0){
                        break;
                    }

                }
                console.log(top, push && lastPopped + num < 0)

                if ((push && lastPopped + num < 0) && (top < 0 || stack.length == 0) || (top < 0 && lastPopped + num != 0) ){

                    stack.push(num)
                }
            }




        }


    })

    return stack;

};
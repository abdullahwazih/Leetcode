function evalRPN(tokens: string[]): number {

    const stack: number[] = [];



    for (const token of tokens) {

        if (token === '+' || token === '-' || token === '*' || token === '/') {

            let op1 = Number(stack.pop());
            let op2 = Number(stack.pop());
            if (token === '+') {

                stack.push(op1 + op2);
            }
            else if (token === '-') {
                stack.push(op2 - op1);
            }
            else if (token === '*') {
                stack.push(op2 * op1);
            }
            else {

                if (op2 / op1 <= 0) {
                    stack.push(Math.trunc(op2 / op1));
                }
                else {
                    stack.push(Math.floor(op2 / op1));

                }
            }
        }
        else {
            stack.push(Number(token));
        }


    }

    return stack.pop();
};
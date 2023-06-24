/*
Thought process: Add characters into the stack until the end of the decoded string (until "]").
Then get the string from the stack also the number by using "[".
Then join the string and return it.
*/

function decodeString(s: string): string {
    const stack = []

    const decodeString = (str: string, num: number) => {
        let val = ""

        for(let i = 0; i < num; i += 1) {
            val += str
        }

        return val
    }

    for(let i = 0; i < s.length; i += 1) {
       let char = s[i]

       if(char === "]") {
           let str = ""
           let num = ""

           // retrieving string
           while(stack[stack.length - 1] !== "[") {
               str = stack.pop() + str 
           }

           stack.pop()
         
           // retrieving number
           while(!isNaN(stack[stack.length - 1])) {
               num = stack.pop() + num 
           }
           
            stack.push(decodeString(str, Number(num)))
       } else {
           stack.push(char)
       }
    }

    return stack.join("")
};

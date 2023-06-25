/*
Thought process: Add slash ("/") in the stack. Then get the directory name.
If the directory name is ".." then remove the previous directory.
or directory name is equal to "." then skip otherwise add the directroy name in the stack. 
At last join the array and return it.
*/

function simplifyPath(path: string): string {
  let stack = ["/"]
  let i = 1

  while (i < path.length) {
    let char = path[i]
    let top = stack[stack.length - 1]

    // skipping when multple "/" is present
    if (top === "/" && char === "/") {
      i += 1
      continue
    } else if (top === "/" && char !== "/") {
      let dirName = ""
      
      // getting the directory name
      while (i < path.length && char !== "/") {
        dirName += char
        i += 1
        char = path[i]
      }

      // removing prev directory
      if (dirName === "..") {
        stack.pop()
        stack.pop()
      } else if (dirName !== ".") {
        stack.push(dirName)
      }
    } else {
      stack.push(char)
      i += 1
    }
  }

  if (stack[stack.length - 1] === "/") {
    stack.pop()
  }

  return stack.length ? stack.join("") : "/"
};

let Stack = ()=>{
  const stack = new Array() //private Variable
  function getTopIndex(){ //private function
    return stack.length-1
  }
  return{
    push:(val)=>{stack.push(val)},
    pop:()=>stack.pop(),
    peak:()=>stack[getTopIndex()]
  }
}


let a = Stack()
let b = Stack()

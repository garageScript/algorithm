const tree = {
  val: 10,
  children: [{val:1, children:[{val:3,children:[]},{val:4,children:[]}]},{val:2, children:[{val:5,children:[]},{val:6,children:[]}]}]
};

const bfs = (lev=[])=>{
  if(!lev.length){
    return;
 }
  n = lev.pop();
  console.log(n);
  return bfs(lev.concat(n.children));
}
console.log(bfs([tree]));

/*
const dfs = (lev=[])=>{
if(!lev.length){
return;
}
n = lev.pop();
console.log(n.getData());
dfs(lev.concat(n.children));
}

dfs([tree]);
*/

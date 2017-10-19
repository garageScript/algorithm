const tree = {
  val: 10,
  children: [{val:10, children:[{val:1},{val:2}]},{val:20, children:[{val:3},{val:4}]}]
};

const bfs = (lev=[])=>{
  if(!lev.length){
    return;
  }
  n = lev.shift();
  //console.log(n.getData());
  bfs(lev.concat(n.children));
}
bfs([tree]);

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

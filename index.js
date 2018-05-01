function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
  // or can be written as return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lists = document.querySelectorAll('.ranked-list')
  for (let i=0;i<lists.length;i++){
    lists[i].innerHTML=parseInt(lists[i].innerHTML) + n;
  }
}

function deepestChild(){
  var list=document.getElementById("grand-node").querySelectorAll("div");
  var child;
  for(let i=0;i<list.length-1;i++){
    child = list[i].querySelector("div");
  }
  return child
}

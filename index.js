// getFirstSelector accepts one argument (selector) and returns the first element that matches the selector
function getFirstSelector(selector) {
  return document.querySelector(selector);
};

// nestedTarget that pulls a .target out of #nested
function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
};

//increaseRankBy(n) - increases the ranks in all of the .ranked-list by n
// select all elements with class .ranked-list
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

// deepestChild() - pulls out the most deeply nested child element from  div#grand-node

function deepestChild() {
  // selects all the divs inside the #grand-node element
  let list = document.querySelector(`#grand-node`).querySelectorAll("div");
  let child;
  //for loop that r uns as long as the length of the array list-1 is lower than the counter variable i, the loop assigns the variable `child` the return value of querySelector("div") and returns it after the loop is done running
  for (let i = 0; i < list.length - 1; i++) {
    child = list[i].querySelector("div");
  }
  return child;
}

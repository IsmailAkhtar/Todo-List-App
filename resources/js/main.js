var removeSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.67"><defs><style>.cls-1{fill:#35353d;}</style></defs><title>Asset 25</title><g  data-name="Layer 2"><g  data-name="Layer 1"><path class="fill" d="M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z"/><path class="fill" d="M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z"/><path class="fill" d="M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z"/></g></g></svg>';
var completeSVG =
  ' <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
//user clicked on the add buttons
//If there is any text inside the item field add that text to the todo list

document.getElementById("add").addEventListener("click", function () {
  var value = document.getElementById("item").value;
  if (value) {
    addItemTodo(value);
    document.getElementById("item").value = "";
  }
});

//Remove the items in the list
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id =  parent.id;
    //check if the item should be added to completes list or to re-added to the todo list

    var  target =(id === 'todo')? document.getElementById('completed'):document.getElementById('todo');
   parent.removeChild(item);
   target.insertBefore(item,target.childNodes[0]);

}


//Add a new item to the todo list
function addItemTodo(text) {
  var list = document.getElementById("todo");

  var item = document.createElement("Li");
  item.innerText = text;

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");
  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeSVG;

  //Add click event for removing items
  remove.addEventListener('click', removeItem);

  var complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeSVG;

  //Add click event for completing items

  complete.addEventListener('click',completeItem);
 

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}

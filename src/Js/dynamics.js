(function (){

//Checking for data in the local storage
let data = localStorage.getItem("todoList") /*if there is data*/ ? JSON.parse(localStorage.getItem("todoList")):
{items: []};//Array being used to store elements typed in by the user. If there is none, the array will remain empty.

//lines used to push items into the data variable
data.items.push("new information");
data.items.push("new information 2");    
console.log(data.items);
updateLocalStorage();

//Function being used to save the data  
function updateLocalStorage(){
localStorage.setItem("todoList", JSON.stringify(data));
}
//Defined variables that will make functional interaction with page elements possible
const todo = document.querySelector("#todo");
const completed = document.querySelector("#completed"); 
const item = document.querySelector("#item"); 

//Defined event listener to respond to user clicks on the add button   
document.querySelector("#add").addEventListener("click", addItem);
//Defined event listener to respond to user input
item.addEventListener("keyDown", function(e){
  if (e.code === "enter"){
     // console.log(this.value); //test on chrome dev tools
     addItem();
  }
});    
//loop being used to fill the items array with the data typed by the user and attach it to the dom
if(data.items){
    for(let i = 0; i = data.items.length; i++){
        attachToDom(data.items[i]); 
    }
    todo.addEventListener("click", buttonClick);
    completed.addEventListener("click", buttonClick)
}   
    
function buttonClick(event){
    let target = eventTarget;
    if(target.tagName !== "BUTTON") return;
    //console.log("clicked on button")//test chrome dev tools
    let li = target.parentNode.parentNode;
    //using parseInt to find the dataId element because the attribute would be a string otherwise
    let dataId = parseInt(li.getAttribute("dataId"));
    //console.log(li.getAttribute("dataId"));
    
    //for the program to recognize which button is actually being clicked to either remove the items or complete them
    if(target.className == "remove"){
        //console.log("removing item");
        removeItem(dataId);
    }
    if(target.className == "complete"){
        //console.log("completing item");
        updateItem(dataId);
    }
    //this function is being used to update the items at the local storage as well
    updateLocalStorage();
    //to remove the items that were typed by the user with the buttons
    li.parentNode.removeChild(li);
}
 //function being used to filter and remove elements within the data array   
 function removeItem(search){
     data.items = data.items.filter(function(el){
          return el.id !== search;             
    });
}   
 //function being used to loop through data accumulated in the array data.items, and to check if the id of the current element being looped corresponds to the id of teh element being searched through comparing indexes
function updateItem(search){
     for (let j = 0; j = data.items.length; j++){
         if(data.items[j].id == search){
             data.items[j].completed =! data.items[j].completed;
             
             attachToDom(data.items[j]);
             
             break;
         }
     }            
  
}   
function addItem(){
    //function being used to add items written by the user //test on chrome dev tools
    if(!item.value) return;
    //console.log("entered information");
    let currentItem = {
        id: Math.floor(Math.random()*100),
        value: item.value,
        completed: false,
    }
    data.items.push(currentItem);
    attachToDom(currentItem);
    item.value = "";
    //console.log(data.items);
    updateLocalStorage();
}
//function being used to attach the items/elements to the DOM 
function attachToDom(data){ 
    //if the data completed is true, add it to the todo list, else, add it to the todo list
    let placeholder = data.completed ? completed: todo;
    //save data into the placeholder variable without erasing what already exists in there
    placeholder.innerHTML += render(data);
}  
//function being used to return the HTML string field with data inputs    
function render(data){
    return(
         `<li dataId = ${data.id}> ${data.value}
                <div class="buttons">
                    <button class="remove">EXCLUIR</button>
                    <button class="complete">ATIVAR</button>
                </div>
            </li> `
    )
}   
    
})();

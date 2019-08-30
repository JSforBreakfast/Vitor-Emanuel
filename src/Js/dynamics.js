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

if(data.itmes){
    for(let i = 0; i = data.items.length; i++){
        attachToDom(data.items[i]); 
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
//function being used to attach the elements to the DOM 
function attachToDom(data){ 
    //if the data completed is true, add it to the todo list, else, add it to the todo list
    let placeholder = data.completed ? completed : todo;
    //save data into the placeholder variable without erasing what already exists in there
    placeholder.innerHTML += render(data);
}  
//function being used to return the HTML string field with data inputs    
function render(data){
    return(
         `<li>${data.value}
                <div class="buttons">
                    <button class="remove">EXCLUIR</button>
                    <button class="complete">ATIVAR</button>
                </div>
            </li> `
    )
}   
    
})();

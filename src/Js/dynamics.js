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
    
function addItem(){
    //function being used to add items written by the user //test on chrome dev tools
    if(!item.value) return;
    //console.log("entered information");
    let currentItem = {
        id: math.floor(Math.random()*100),
        value: item.value,
        completed: false
    }
    data.items.push(currentItem);
    attachToDom
    item.value = "";
    //console.log(data.items);
    updateLocalStorage();
}
   
    
    
    
    
})();

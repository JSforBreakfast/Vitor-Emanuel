(function (){

//Array being used to store elements typed in by the user
const data = {items: []};

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
    //function being used to test if there was input before the click //test on chrome dev tools
    if(!item.value) return;
    console.log("entered information");
}
    
})();

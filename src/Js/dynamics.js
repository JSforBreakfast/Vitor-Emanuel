(function (){

const todo = document.querySelector("#todo");
const completed = document.querySelector("#completed"); 
const item = document.querySelector("#item"); 
document.querySelector("#add").addEventListener("click", addItem);
item.addEventListener("keyDown", function(e){
  if (e.code === "enter"){
     // console.log(this.value); //test on chrome dev tools
     addItem();
  }
})    
    
function addItem(){
    //console.log("clicked"); //test on chrome dev tools
}
    
})();

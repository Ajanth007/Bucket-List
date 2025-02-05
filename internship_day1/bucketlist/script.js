 const inputbox=document.getElementById("box");    //form tag
const ListContainer=document.getElementById("list-container");  //ul element
const addbutton=document.getElementById("addtask");   //add button 


function addtask(){
    if(inputbox.value ===''){
        alert("Try to Write something")    ;
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        ListContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
    
}

ListContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {  // Corrected string comparison
        e.target.classList.toggle("checked");
        savedata();
    } 
    else if (e.target.tagName === "SPAN") {  // Fixed elseif syntax
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showlist(){
    ListContainer.innerHTML = localStorage.getItem("data");
}

showlist();

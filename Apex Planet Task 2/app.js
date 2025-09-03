const form= document.querySelector("form");
 form.addEventListener("submit", function(){
    preventdefault();
 
  let name= document.getElementsById("name")[0].Value.trim();
  let email=document.getElementById("email")[0].value.trim();
  let college_name=document.getElementById("College")[0].Value.trim();
  let mobile= document.getElementById("mobile")[0].Value.trim();
  let address= document.getElementById("address")[0].Value.trim();
  let Roll_No= document.getElementById("Roll no")[0].Value.trim();

      if( name===""){
        alert(" Name  is reuired!");
        return;

      }
       if( email===""){
        alert("email is required");
        return;
       }
       if( college_name===""){
        alert(" college is required");
        return;
       }
     if( mobile===""){
        alert("It is mendatory");
        return;}
        alert("From submitted succesfully");
     });
     function addTask(){
      let input= document.getElementById("taskInput");
      let task = input.value.trim();

       if( task==="") return;

       let li=document.createElement("li");
       li.textContent= task;

       let removeBtn =  document.createElement("button");
       removeBtn.textContent="X";
       removeBtn.onclick= () =>li.remove();
         li.appendChild(removeBtn);
         document.getElementById("taskList").appendChild(li);

         input.value ="";
     }


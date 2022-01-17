function handleFormSubmit(e){
  e.preventDefault();
  let e1=e.target.username.value;
  let e2=e.target.email.value;
  let e3=e.target.phone.value;
  let obj={
    username:e1,
    email:e2,
    phone:e3,
  }
  localStorage.setItem(e2,JSON.stringify(obj));
  let ul=document.querySelector('.ul');
    let objfrom=JSON.parse(localStorage.getItem(e2));
    let data=objfrom["email"]+" "+objfrom["phone"]+" "+objfrom["username"];
    let li=document.createElement('li');
    let text=document.createTextNode(data);
    li.appendChild(text);
    let btn=document.createElement('button');
    let tbtn=document.createTextNode('Delete');
  btn.addEventListener('click', function(e) {
    eventhandling(e); 
});


let btn1=document.createElement('button');
  let btn1text=document.createTextNode("Edit");
  btn1.appendChild(btn1text);
  btn1.addEventListener('click',function(e){
    eventhandling(e);
  })
  
    btn.appendChild(tbtn);
    li.appendChild(text);
    li.appendChild(btn);
    li.appendChild(btn1);
    ul.appendChild(li);
    //e.target.username.value="";
    //e.target.email.value="";
    //e.target.phone.value="";
}

module.exports=handleFormSubmit;
function eventhandling(e) {
  e.preventDefault();
  let ife = e.target.textContent.trim();
  let p = e.target.parentNode;
  let em = p.textContent.split(" ");
  if (ife === "Delete") {
    localStorage.removeItem(em[0]);
  } else {
    let objfrom=JSON.parse(localStorage.getItem(em[0]));
    document.getElementById("username").value = objfrom["username"];
    document.getElementById("email").value = objfrom["email"];
    document.getElementById("phone").value = objfrom["phone"];
    localStorage.removeItem(em[0]);
  }
  p.remove();
}
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
    removedata(e); 
});
  
    btn.appendChild(tbtn);
    li.appendChild(text);
    li.appendChild(btn);
    ul.appendChild(li);
}

module.exports=handleFormSubmit;
function removedata(e){
    e.preventDefault();
    let ntd=e.target.parentNode;
    let dataof=ntd.textContent.split(" ");
    let email=dataof[0];
    ntd.remove();
    localStorage.removeItem(email);
}
function handleFormSubmit(e){
  e.preventDefault();
  let e1=e.target.username.value;
  let e2=e.target.email.value;
  let e3=e.target.phone.value;
  let obj={
    username:e1,
    email:e2,
    phone:e3
  }
  localStorage.setItem("User Details",JSON.stringify(obj));
}

module.exports=handleFormSubmit;
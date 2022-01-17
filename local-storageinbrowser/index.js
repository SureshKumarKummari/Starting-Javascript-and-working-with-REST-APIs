function storeit(e){
  e.preventDefault();
  let e1=e.target.username.value;
  let e2=e.target.email.value;
  let e3=e.target.phone.value;
  localStorage.setItem("Username",e1);
  localStorage.setItem("Email",e2);
  localStorage.setItem("Phone",e3);
  }

module.exports=storeit;
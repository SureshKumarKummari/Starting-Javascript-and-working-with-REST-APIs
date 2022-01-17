document.querySelector("#main-heading").style.textAlign="right";
document.querySelector("#basket-heading").style.color="brown";
var v1=document.querySelector(".fruits");
v1.style.backgroundColor="grey";
v1.style.padding="2rem 0"
v1.style.borderRadius="5px"
v1.style.listStyleType="none"
v1.style.width="50%"
v1.style.margin="30px"
var v=document.querySelectorAll(".fruit");
for(let i=1;i<=v.length;i++){
  if(i%2==0){
    v[i-1].style.color="white";
    v[i-1].style.padding="0.5rem 0";
    v[i-1].style.backgroundColor="brown";
  }else{
    v[i-1].style.backgroundColor="lightgrey";
    v[i-1].style.padding="0.5rem 0";
  }
  v[i-1].style.borderRadius="5px"
  v[i-1].style.margin="2px"
}
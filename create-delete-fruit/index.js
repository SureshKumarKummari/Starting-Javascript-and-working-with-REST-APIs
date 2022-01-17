var edit=document.getElementsByClassName("fruit");
for(let i=0;i<edit.length;i++){
  let n=document.createElement('button');
  let nb=document.createTextNode("Edit");
  n.appendChild(nb);
  n.classList.add('edit-btn');
  edit[i].appendChild(n);
}

document.onclick=function(e){
  if(e.target.textContent.trim()==="x"){
    let tb=e.target.parentNode;
    tb.remove();
  }else if(e.target.textContent.trim()==="Add"){
    e.preventDefault();
    let n=document.createElement('li');
    let nb=document.createTextNode(document.getElementById('fruit-to-add').value);
    var ed=document.getElementsByClassName("fruits");
    n.appendChild(nb);
    n.classList.add('fruit');
    ed[0].appendChild(n);
    
    let n2=document.createElement('button');
    let nb2=document.createTextNode("X");
    n2.appendChild(nb2);
    n2.classList.add('delete-btn');
    
    let n1=document.createElement('button');
    let nb1=document.createTextNode("Edit");
    n1.appendChild(nb1);
    n1.classList.add('edit-btn');
    n.appendChild(n2);
    n.appendChild(n1);
      
  }
}
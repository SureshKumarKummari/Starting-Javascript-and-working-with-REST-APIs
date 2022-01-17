function handleFormSubmit(e){
    e.preventDefault();
    let e1=e.target.expense.value;
    let e2=e.target.description.value;
    let e3=e.target.category.value;
    const k = new Date().toString();
    let obj={
      expense: e1,
      description: e2,
      category: e3,
    }
    localStorage.setItem(k,JSON.stringify(obj));
    let ul=document.querySelector('.ul');
    let li=document.createElement('li');
    let objfrom=JSON.parse(localStorage.getItem(k));
    let data=objfrom["expense"]+" - "+objfrom["category"]+" - "+objfrom["description"]+" - ";
    let ins=document.createTextNode(data);
    li.name=k;
    li.appendChild(ins);
  
    let btn1=document.createElement('button');
    let btn1text=document.createTextNode("Edit Expense");
    btn1.appendChild(btn1text);
    //btn1.style.margin="10px";
    btn1.addEventListener('click',function(e){
      eventhandling(e);
    })
  
    let btn2=document.createElement('button');
    let btn2text=document.createTextNode("Delete Expense");
    btn2.appendChild(btn2text);
    btn2.style.margin="10px";
    btn2.addEventListener('click',function(e){
      eventhandling(e);
    })
  
    li.appendChild(btn2);
    li.appendChild(btn1);
    ul.appendChild(li);
    e.target.expense.value="";
    e.target.description.value="";
    e.target.category.value="";
  }
  
  function eventhandling(e) {
    e.preventDefault();
    let ife = e.target.textContent.trim();
    let p = e.target.parentNode;
    let em = p.textContent.split(" - ");
    let k=p.name;
    if (ife === "Delete Expense") {
      localStorage.removeItem(k);
    } else {
      let expense = em[0];
      let description = em[2];
      let category = em[1];
      document.getElementById("expense").value = expense;
      document.getElementById("category").value = category;
      document.getElementById("description").value = description;
    }
    p.remove();
  }
  module.exports = handleFormSubmit;
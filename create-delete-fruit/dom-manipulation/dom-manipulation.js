var p=document.createElement('input');
var form=document.getElementsByTagName("form");
var fm=form[0];
p.name="descr";
p.type="text";
p.id="description";
p.placeholder="Enter description";
var b=document.querySelectorAll('button');
var bb=b[0];
fm.insertBefore(p,bb);
//prt2
var all=document.querySelectorAll('.fruit');
  for(let i=0;i<all.length;i++){
    let pp=document.createElement('p');
    let ppm=document.createTextNode("King of fruits");
    pp.appendChild(ppm);
   pp.className="description";
    pp.style.fontStyle="italic";
    all[i].appendChild(pp);
  }

//part3

let b1 = document.getElementsByTagName('button');
var rb = b1[0];
rb.addEventListener('click', function(e) {
    e.preventDefault();
    var fruitInput = e.currentTarget.form['fruit-to-add'];
    var descrInput = (e.currentTarget.form['description'].value)?e.currentTarget.form['description'].value:"Some description";

    if (fruitInput.value.trim() === "" || descrInput.trim() === "") {
        if (fruitInput.value.trim() === "") {
            fruitInput.placeholder = "Please enter fruit";
        }
        
    } else {
        let n = document.createElement('li');
        let nb = document.createTextNode(fruitInput.value);
        var ed = document.getElementsByClassName("fruits");
        n.appendChild(nb);
        n.classList.add('fruit');

        let n2 = document.createElement('button');
        let nb2 = document.createTextNode("X");
        n2.appendChild(nb2);
        n2.classList.add('delete-btn');

        let p2 = document.createElement('p');
        let textinpp = document.createTextNode(descrInput); 
        p2.appendChild(textinpp);
        p2.style.fontStyle="italic";
        p2.className="description";
        n.appendChild(n2);
        n.appendChild(p2);
        ed[0].appendChild(n);
        fruitInput.value = "";
        descrInput.value = "";
    }
});


//part4
var fn = document.getElementById('filter');
fn.addEventListener('keyup', (e) => {
    var inputValue = e.target.value.toLowerCase();
    for (let j = 0; j < all.length; j++) {
        let desc = all[j];
        let fruit = desc.textContent.toLowerCase(); 
        let descr = desc.querySelector('.description').textContent.toLowerCase();
        if (fruit.includes(inputValue) || descr.includes(inputValue)){  
      //if(fruit.indexOf(inputValue)!==-1 || descr.indexOf(inputValue)!==-1){
          desc.style.display = "flex";
        } else {
            desc.style.display = "none";
        }
   }
  });

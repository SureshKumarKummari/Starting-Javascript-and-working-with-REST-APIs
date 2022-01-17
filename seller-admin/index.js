function handleFormSubmit(e){
    e.preventDefault();
    let obj={
        "price": e.target.price.value,
        "product": e.target.product.value,
        "category": e.target.category.value
    }
    axios.post("https://crudcrud.com/api/555bbe45fdee44d49ac0710db7c64b95/products",obj).then((result)=>{
    console.log("Data Submitted Successfully!");    
    display(result.data);
    document.getElementById("price").value="";
    document.getElementById("product").value="";
    document.getElementById("category").value="";

    }).catch((error)=>{
        console.log(error);
    })
}

function display(obj){
    let li=document.createElement('li');
    let dat=obj["price"]+" - "+obj["category"]+" - "+obj["product"]+" - ";
    let data=document.createTextNode(dat);
    li.appendChild(data);

    let btn=document.createElement('button');
    let btntext=document.createTextNode("Delete Product");
    btn.appendChild(btntext);

    btn.addEventListener('click',(e)=>{
        handleevent(e);
    })

    li.appendChild(btn);

    li.setAttribute('name',obj["_id"]);

    if(obj["category"]==="Food"){
        document.querySelector('.ful').appendChild(li);
    }else if(obj["category"]==="Skincare"){
        document.querySelector('.sul').appendChild(li);
    }else{
        document.querySelector('.eul').appendChild(li);
    }
}


function handleevent(e){
    e.preventDefault();
    let id=e.target.parentNode.getAttribute('name');
    axios.delete(`https://crudcrud.com/api/555bbe45fdee44d49ac0710db7c64b95/products/${id}`).then((result)=>{
        console.log("Product Deleted!");
        e.target.parentNode.remove();
    }).catch((error)=>{
        console.log(error);
    })
}

window.addEventListener("DOMContentLoaded",function(){
    axios.get("https://crudcrud.com/api/555bbe45fdee44d49ac0710db7c64b95/products").then((result)=>{
    for(let i=0;i<result.data.length;i++){  
    display(result.data[i]);
    }
    }).catch((error)=>{
        console.log(error);
    })
});



module.exports=handleFormSubmit;
const para = document.createElement('h3');
const d=document.getElementById("header");
const p = document.createTextNode('Buy high quality organic fruits online');
para.appendChild(p);
d.appendChild(para);
para.style.fontStyle="italic";

const t = document.getElementsByTagName('div');
const cd = t[1];
const f = document.getElementsByClassName('fruits');
const para2=document.createElement('p');
const p2=document.createTextNode('Total fruits:4');
para2.appendChild(p2);
cd.insertBefore(para2,f[0]);
para2.id="fruits-total";
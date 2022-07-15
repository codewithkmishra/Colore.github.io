let btn= document.getElementById("btn")
btn.addEventListener("click", getcolor)
 function getcolor() {

     let rendomnum = Math.floor(Math.random() * 16777215)  
     console.log(rendomnum)
     let color = "#" + rendomnum.toString(16);
     console.log(color)
     let p = document.getElementById("p")
     p.innerText = color
     let change = document.getElementById("change")
     change.style.backgroundColor = color; 
    p.style.color = color;

     navigator.clipboard.writeText(color)

 }
 getcolor()
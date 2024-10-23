const icons = document.querySelectorAll(".section-1-icon i")

let i =1

setInterval(() => {
    i++
    const icon= document.querySelector(".section-1-icon i.change")

    icon.classList.remove("change")
    

    if(i>icons.length){
        icons[0].classList.add("change")
        
    }else{
        icon.nextElementSibling.classList.add("change")

    }
     
},3000)
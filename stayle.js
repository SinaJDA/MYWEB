let text = document.querySelector(".text1")


let list = ['وردپرس ',"توسعه وب","طراحی وب"]

let listindex = 0 
let indextitem = 0 

function start(){
    if(indextitem < list[listindex].length){
        text.innerHTML += list[listindex].charAt(indextitem)
        indextitem++
        setTimeout(start,200)
    }

    else{
        setTimeout(and,2000)
    }
}


function and(){
    if(indextitem > 0){
        text.innerHTML = list[listindex].substring(0, indextitem-1)
        indextitem--

        setTimeout(and,100) 
    }

    else{
        listindex++
        if(listindex > list.length-1){
            listindex = 0
        }
        console.log(listindex);
        setTimeout(start, 1000)
    }
}


window.addEventListener("DOMContentLoaded", start)

document.addEventListener("DOMContentLoaded", function () {

    const lod = document.querySelector('.loding')
    lod.remove()
});



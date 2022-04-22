let ul = document.querySelector('.tasks')
let input = document.querySelector('input')
let button1 = document.querySelector(".button1")
let button3 = document.querySelector(".addbutton")
let clickCounter2 = 0
let clickCounter3 = 0
let arr = []
document.querySelector("input").focus()
button1.style.backgroundImage = "url('/img/Group74.svg')"
button1.addEventListener('mouseover', () => {
    button1.style.backgroundImage = `url('/img/Group73.svg')`;
});
button1.addEventListener('mouseleave', () => {
    button1.style.backgroundImage = "url('/img/Group74.svg')"
});

button1.onclick = function () {
    sortListDir()
   
    clickCounter3++
    if (clickCounter3 % 2 != 0) {

        button1.style.backgroundImage = "url('/img/Group91.svg')"
        button1.addEventListener('mouseover', () => {
            button1.style.backgroundImage = `url('/img/Group91.svg')`;
        });
        button1.addEventListener('mouseleave', () => {
            button1.style.backgroundImage = "url('/img/Group90.svg')"
        });
        
    } 
    else {

        button1.style.backgroundImage = "url('/img/Group73.svg')"
        button1.addEventListener('mouseover', () => {
            button1.style.backgroundImage = `url('/img/Group73.svg')`;
        });
        button1.addEventListener('mouseleave', () => {
            button1.style.backgroundImage = "url('/img/Group74.svg')"
        });
      
    }

}

document.querySelector(".button2").style.backgroundImage = "url('/img/Group77.svg')"
document.querySelector(".button2").addEventListener('mouseover', () => {
    document.querySelector(".button2").style.backgroundImage = `url('/img/Group70.svg')`;
});
document.querySelector(".button2").addEventListener('mouseleave', () => {
    document.querySelector(".button2").style.backgroundImage = "url('/img/Group77.svg')"
});
function addlist(e) {
    clickCounter2++
    document.querySelector(".tasks").scrollTop=document.querySelector(".tasks").scrollHeight
    if (e.key === "Enter" || e.keyCode === 13) {
    if (input.value != 0) {
        ul.scrollTop = ul.scrollHeight
            button1.style.marginBottom = "0.5vw"
            ul.style.display = 'block'
            document.querySelector(".addbutton").style.marginBottom = "1.4vw"
            document.querySelector(".one").style.borderTop = "none"
            document.querySelector(".one").style.borderTopLeftRadius = '0';
            document.querySelector(".one").style.borderTopRightRadius = '0';
            document.querySelector(".one").style.marginTop = '-2vw';
            ul.style.paddingLeft = "1vw"
            ul.style.paddingBottom = "1vw"
            ul.style.borderBottom = "1px solid #c4c4c4";
            ul.style.borderBottomLeftRadius = '0.869vw';
            ul.style.borderBottomRightRadius = '0.869vw';
            let li = document.createElement('p')
            li.classList.add("p")
            li.innerText += input.value;
            li.style.cursor = "pointer"
            li.style.marginBottom = "0.43vw"
            ul.append(li)
            let btn = document.createElement("button");
            btn.style.background = "none"
            li.appendChild(btn);
            li.style.display = 'flex'
            btn.style.display = "flex"
            btn.style.alignItems = 'center'
            li.style.justifyContent = "space-between"
            btn.style.backgroundImage = "url('/img/Group77.svg')"
            btn.classList.add("btn");
            btn.style.backgroundRepeat='no-repeat'
            btn.style.backgroundSize='cover'

            btn.addEventListener('mouseover', () => {
                btn.style.backgroundImage = `url('/img/Group70.svg')`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.backgroundImage = "url('/img/Group77.svg')"
            });
            btn.style.backgroundPosition = "center"
            btn.addEventListener("click", emptyinp)

            function emptyinp() {
                ul.removeChild(li)
                if (ul.childElementCount == 0) {
                    document.querySelector(".one").style.marginTop = "2vw"
                    document.querySelector(".one").style.borderTop = "1px solid #C4C4C4";
                    document.querySelector(".one").style.borderTopLeftRadius = '0.869vw';
                    document.querySelector(".one").style.borderTopRightRadius = '0.869vw';
                    ul.style.display = "none"
                    document.querySelector(".one").style.display = "block"
                    document.querySelector(".one").style.marginTop = "0.58vw"
                    button1.style.backgroundImage = "url('/img/Group74.svg')"
                }


            }

            input.value = ""
            document.querySelector(".one").style.display = "none"
        } 
        else if (document.querySelector(".one").style.display=== 'block'&&input.value==0) {
            alert("You have to add something to use tracker")
        }
    }
}

document.addEventListener("keyup", addlist)

 function addbutton () {
    ul.style.borderBottom = "none";
    ul.style.borderBottomLeftRadius = '0';
    ul.style.borderBottomRightRadius = '0';
    document.querySelector(".one").style.display = "block";
    document.querySelector("input").focus()
    document.querySelector(".tasks").scrollTop=document.querySelector(".tasks").scrollHeight
    // document.querySelector(".inputandbutton").style.width = "24.869vw";
 
}
button3.addEventListener("click", addbutton)

function sortListDir() {
    let list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("id01");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("p");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

document.querySelector('.button2').onclick = function () {

    input.value = ""
}

new Sortable(ul, {
    animation: 200
});
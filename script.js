// Create a "close" button and append it to each list item

let mynodeList = document.getElementsByTagName("li")
for(let i = 0; i<mynodeList.length; i++)
{
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    mynodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item

let closebtn = document.getElementsByClassName("close");
for(let i = 0; i<closebtn.length; i++)
{
    closebtn[i].addEventListener('click', function(){
        this.parentElement.remove();
    });
}

// Add a "checked" symbol when clicking on a list item

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Add new item in the list

function newElement()
{
    let li = document.createElement("li");
    let inputvalue = document.getElementById("myinput").value;
    let t = document.createTextNode(inputvalue);

    li.appendChild(t);
    if(inputvalue === '')
        alert("You must write something!")
    else
    {
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myinput").value = '';

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    let closebtn = document.getElementsByClassName("close");
    for(let  i = 0; i<closebtn.length; i++)
    {
        closebtn[i].addEventListener('click', function(){
            this.parentElement.remove();
        })
    }

}


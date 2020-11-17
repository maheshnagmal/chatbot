messages = document.getElementById('messages')
input = document.getElementById('input')
senderblock = document.getElementById('senderblock')
receiverblock = document.getElementById('receiverblock')
msgno = 0
console.log("Hello");
function taketheinput(event){
    if(event.key ==="Enter"){
        messages.innerHTML += receiverblock.outerHTML
        msgno += 1
        messages.lastChild.id = msgno
        messages.lastChild.childNodes[1].textContent = input.value
        processinput(input.value) 
        input.value =""
    }
}

function processinput(inputval){
    if (inputval != ""){
        messages.innerHTML += senderblock.outerHTML
        msgno += 1
        messages.lastChild.id = msgno
        messages.lastChild.childNodes[1].textContent = reply(inputval)
        
    }
}
function reply(inputval){
    result = inputval.match(/(How)/g)
    if (result.includes("How")){
        return "fine"
    }
}
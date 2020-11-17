import React, { Component } from "react";

class MainPage extends Component{
    
    constructor(){
        super();
        this.state = {
            name: "MainPage"
        };
        this.onKeyUp = this.onKeyUp.bind(this);
        this.messages = React.createRef();
        this.input = React.createRef();
        this.senderblock = React.createRef();
        this.receiverblock = React.createRef();
        this.msgno = 0
    }

    componentDidMount() {
        // we can use this.inputRef.current to access DOM element
      }
    
      componentDidUpdate() {
        // we can use this.inputRef.current to access DOM element
      }
    
      handleClick = () => {
        // we can use this.inputRef.current to access DOM element
      };

    onKeyUp(event){
        if (event.key === "Enter") {
            this.messages.innerHTML += this.receiverblock.outerHTML
            this.msgno += 1
            this.messages.lastChild.id = this.msgno
            this.messages.lastChild.childNodes[1].textContent = this.input.value
            this.processinput(input.value)
            this.input.value = ""
        }
    }
    taketheinput(event) {
       
    }
    processinput(inputval) {
        if (inputval != "") {
            this.messages.innerHTML += this.senderblock.outerHTML
            this.msgno += 1
            this.messages.lastChild.id = this.msgno
            this.messages.lastChild.childNodes[1].textContent = this.reply(inputval)
        }
    }
    reply(inputval) {
        result = inputval.match(/(How)/g)
        if (result.includes("How")) {
            return "fine"
        }
    }

    render(){
        const {inputValue} = this.state;

        return(
            <div className="relative">
                <div className="absolute">
                    <div className="box">
                        <h3>AYURBOT</h3>
                    </div>
                    <div id="box1" className="box1">
                        <div id="messages" ref={this.messages}>
                            <div className="senderblock" ref={this.senderblock}>
                                <div className="sendermessage">
                                    HELLO!!! WELCOME TO AYURBOT
                        </div>
                            </div>
                            <div className="receiverblock" ref={this.receiverblock}>
                                <div className="receivermessage">
                                    hello
                                </div>
                            </div>
                        </div>
                        <div id="hidden" className="hidden">
                            <div id="senderblock" className="senderblock" ref={this.senderblock}>
                                <div className="sendermessage">
                                    HELLO!!! WELCOME TO AYURBOT
                        </div>
                            </div>
                            <div id="receiverblock" className="receiverblock" ref={this.receiverblock}>
                                <div className="receivermessage">
                                    hello
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                        <input id="input" className="input" onKeyUp={this.onKeyUp} ref={this.input} placeholder="Type here ..." />
                    </div>
                    {/* <script type="text/javascript" src="chatbot.js"></script> */}
                </div>
            </div>
        );
    }
}
export default MainPage;







// this.onKeyUp = this.onKeyUp.bind(this);
// this.messages = document.getElementById('messages')
// this.input = document.getElementById('input')
// this.senderblock = document.getElementById('senderblock')
// this.receiverblock = document.getElementById('receiverblock')
// this.msgno = 0
// }
// onKeyUp(event){
// if (event.key === "Enter") {
//     this.messages.innerHTML += this.receiverblock.outerHTML
//     this.msgno += 1
//     this.messages.lastChild.id = this.msgno
//     this.messages.lastChild.childNodes[1].textContent = this.input.value
//     this.processinput(this.input.value)
//     this.input.value = ""
// }
// }
// taketheinput(event) {

// }
// processinput(inputval) {
// if (inputval !== "") {
//     this.messages.innerHTML += this.senderblock.outerHTML
//     this.msgno += 1
//     this.messages.lastChild.id = this.msgno
//     this.messages.lastChild.childNodes[1].textContent = this.reply(inputval)
// }
// }
// reply(inputval) {
// var result = inputval.match(/(How)/g)
// if (result.includes("How")) {
//     return "fine"
// }
// }
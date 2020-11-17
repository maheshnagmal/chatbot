import './style.css';

import React, {Component} from "react";
class App extends Component{

    constructor() {
        super();
        this.state = {
            name: "MainPage"
        };
        this.messages = null
        this.input = null
        this.senderblock = null
        this.receiverblock = null
        this.msgno = 0
        this.taketheinput = this.taketheinput.bind(this)
    }
    componentDidMount(){
        this.messages = document.getElementById('messages')
        this.input = document.getElementById('input')
        this.senderblock = document.getElementById('senderblock')
        this.receiverblock = document.getElementById('receiverblock')
        this.msgno = 0
    }
    taketheinput(event) {
        if (event.key === "Enter") {
            if (this.messages.innerHTML !== null){
                this.messages.innerHTML += this.receiverblock.outerHTML
                this.msgno += 1
                this.messages.lastChild.id = this.msgno
                console.log(this.messages.lastChild.childNodes);
                this.messages.lastChild.childNodes[0].textContent = this.input.value
                this.processinput(this.input.value)
                this.input.value = ""
            }
        }
    }

    processinput(inputval) {
        if (inputval !== "") {
            this.messages.innerHTML += this.senderblock.outerHTML
            this.msgno += 1
            this.messages.lastChild.id = this.msgno
            console.log(this.messages.lastChild.childNodes);
            this.messages.lastChild.childNodes[0].textContent = this.reply(inputval)

        }
    }
    reply(inputval) {
        if (inputval.includes("How")) {
            return "fine"
        }
        return "hello"
    }
    render(){
        return(
            <html>
                <body>
            <div className="container">
            <div className="box">
                <h3>AYURBOT</h3>
            </div>
            <div id="box1" className="box1">
                <div id="messages">
                    <div className="senderblock">
                    
                        <div className="sendermessage">
                            HELLO!!! WELCOME TO AYURBOT
                        </div>
                    </div>
                    <div className="receiverblock">
                        <div className="receivermessage">
                            
                        </div>
                    </div>
                </div>
                <div id="hidden" className="hidden">
                    <div id="senderblock" className="senderblock">
                        <div className="sendermessage">
                            HELLO!!! WELCOME TO AYURBOT
                        </div>
                    </div>
                    <div id="receiverblock" className="receiverblock">
                        <div className="receivermessage">
                
                        </div>
                    </div>
                </div>
            </div>
            <div className="box2">
                <input id="input" className="input" onKeyUp={this.taketheinput} placeholder="type here ..."/>
            </div>
        </div>
    </body>
    </html>
        );
    }
}
export default App;

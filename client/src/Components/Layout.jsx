import React, { Component } from 'react'

import "../css/header.css"
import TriCheioLogo from "../images/TriCheioLogo.png"

import "../css/footer.css"
import "../css/bootstrap/bootstrap.min.css"

class MHeader extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header id="header">
                <div class="content">      
                    <div id="logoDiv">
                        <img id="logoBtn" border="0" alt="TriCheio" src={TriCheioLogo} onClick={() =>{window.location.href = "/"}}/>
                    </div>
                    <div id="loginDiv">
                        {this.props.usertype === "guest" &&
                        <button id="loginBtn">Login</button>
                        }
                        {this.props.usertype !== "guest" &&
                        <button id="logoutBtn">Logout</button>        
                        }
                    </div>
                </div>           
            </header>
        );
    }
}

class MFooter extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <footer style= {{backgroundColor: "#dddddd"}}>
                <div class="container p-3">
                    <div class="row">
                        <div class="col-sm">
                            <h4 class="mb-3" style= {{color:"black"}}>
                                Links
                            </h4>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-1">
                                    <a href="" style= {{color:"black"}}>FAQ</a>
                                </li>
                                <li class="mb-1">
                                    <a href="https://www.lipsum.com/feed/html" style= {{color:"black"}}>Lorem Ipsum</a>
                                </li>
                                <li class="mb-1">
                                    <a href="https://github.com/" style= {{color:"black"}}>Github</a>
                                </li>
                                <li>
                                    <a href="https://getbootstrap.com/" style= {{color:"black"}}>Bootstap</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm">
                            <h4 class="mb-1" style= {{color:"black"}}>
                                Contate nosso atendimento ao cliente:
                            </h4>
                            <h4 class="mb-1" style= {{color:"black"}}>
                                +55 (55) 95555-5555
                            </h4>
                            <h4 class="mb-1" style= {{color:"black"}}>
                                Tricheio@tricheio.com
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="text-center p-3" style= {{backgroundColor: "rgb(90, 8, 45, 0.6)"}}>
                    <a class="text-dark" >
                        ©2021 Copyright: Max Santos
                    </a>
                </div>
            </footer>
        );
    }
}

export {
    MHeader,
    MFooter,
};
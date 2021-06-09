const logoBtn = document.getElementById("logoBtn")
logoBtn.addEventListener("click", redirectToHome)

function redirectToHome(){
    window.location.href = "/home";
}

const loginBtn = document.getElementById("loginBtn")

if(loginBtn)
    loginBtn.addEventListener("click", setLoginDiv)

function setLoginDiv(){
    let loginDiv = document.getElementById("loginDiv")

    loginDiv.innerHTML ='<form action="/" method="POST">\
                            <table style="width:100%">\
                                <th>\
                                    <p> Username: </p>\
                                    <input type="text" name="username">\
                                </th>\
                                <th>\
                                    <p> Password: </p>\
                                    <input type="password" name="password">\
                                </th>\
                                <th>\
                                    <button id="sLoginBtn" type="submit">Login</button>\
                                </th>\
                            </table>\
                        </form>'
}
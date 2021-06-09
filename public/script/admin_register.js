const addHotelBtn = document.getElementById("addHotelBtn")
addHotelBtn.addEventListener("click", addHotel)

function addHotel(){
    let admin_register = document.getElementById("admin_register")

    admin_register.innerHTML = '<div class="content">\
                                        <form action="/" method="POST">\
                                            <input type="hidden" name="type" value="hotel">\
                                            <table style="width:100%">\
                                                <th>\
                                                    <p> Nome: </p>\
                                                    <input type="text" name="name">\
                                                </th>\
                                                <th>\
                                                    <p> Password: </p>\
                                                    <input type="password" name="password">\
                                                </th>\
                                                <th>\
                                                    <p> CNPJ: </p>\
                                                    <input type="text" name="cnpj">\
                                                </th>\
                                                <th>\
                                                    <p> Cidade: </p>\
                                                    <input type="text" name="city">\
                                                </th>\
                                                <th>\
                                                    <button type="submit">Register</button>\
                                                </th>\
                                            </table>\
                                        </form>\
                                </div>'
}

const addSiteBtn = document.getElementById("addSiteBtn")
addSiteBtn.addEventListener("click", addSite)

function addSite(){
    let admin_register = document.getElementById("admin_register")

    admin_register.innerHTML = '<div class="content">\
                                        <form action="/" method="POST">\
                                            <input type="hidden" name="type" value="site">\
                                            <table style="width:100%">\
                                                <th>\
                                                    <p> Nome: </p>\
                                                    <input type="text" name="name">\
                                                </th>\
                                                <th>\
                                                    <p> Password: </p>\
                                                    <input type="password" name="password">\
                                                </th>\
                                                <th>\
                                                    <p> URL: </p>\
                                                    <input type="text" name="url">\
                                                </th>\
                                                <th>\
                                                    <p> Telefone: </p>\
                                                    <input type="text" name="telefone">\
                                                </th>\
                                                <th>\
                                                    <button type="submit">Register</button>\
                                                </th>\
                                            </table>\
                                        </form>\
                                </div>'
}
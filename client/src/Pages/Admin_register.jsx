import "../css/section-admin-register.css"

const Admin_register = () => {
    return (
        <section id="admin_register">
            <div class="content"> 
                <div class="shselect">
                    <h2>Qual você deseja adicionar?</h2>
                    <button id="addHotelBtn" onClick={() => {
                        let admin_register = document.getElementById("admin_register")
                    
                        admin_register.innerHTML = '<div class="content">\
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
                                                                        <button>Register</button>\
                                                                    </th>\
                                                                </table>\
                                                    </div>'
                    }}>Hotel</button>
                    <button id="addSiteBtn" onClick={() => {
                        let admin_register = document.getElementById("admin_register")
                    
                        admin_register.innerHTML = '<div class="content">\
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
                                                                        <button>Register</button>\
                                                                    </th>\
                                                                </table>\
                                                    </div>'
                    }}>Site</button>
                </div>
            </div>
        </section>
    );
}

export default Admin_register;

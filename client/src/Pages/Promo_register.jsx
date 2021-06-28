import "../css/section-promo-register.css"

const Promo_register = () => {
    return (
        <section id="promo_register">
            <div class="content">
                <table>
                    <th>
                        <p> URL: </p>
                        <input type="text" name="url" />
                    </th>
                    <th>
                        <p> Hotel: </p>
                        <input type="text" name="hotel" />
                    </th>
                    <th>
                        <p> CheckIn Date: </p>
                        <input type="date" name="indate" />
                    </th>
                    <th>
                        <p> CheckOut Date: </p>
                        <input type="date" name="outdate" />
                    </th>
                    <th>
                        <p> Preço: </p>
                        <input type="text" name="price" />
                    </th>
                    <th>
                        <button onClick={() =>{window.location.href = "/"}}>Register</button>
                    </th>
                </table>          
            </div>
        </section>
    );
}

export default Promo_register;
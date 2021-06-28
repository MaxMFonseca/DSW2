import "../css/section-introduction.css"
import globo636 from "../images/globo636.png"
import globo400 from "../images/globo400.png"
import globo200 from "../images/globo200.png"

import "../css/section-promotions.css"
import plane from "../images/plane.png"

import "../css/section-admin-base.css"
import "../css/section-hotel-base.css"
import "../css/section-site-base.css"

const Base = (props) => {
    return (
        <>
            <section id="introduction">
                <div class="content"> 
                    <img class="globo636" src={globo636} />
                    <img class="globo400" src={globo400} />
                    <img class="globo200" src={globo200} />
                    <div class="container">
                        <h1>Viage para todo o MUNDO com Tricheio!!!</h1>
                        <h2>Dubai, Disney, Paris, Sidney, Lisboa e muito mais!</h2>
                        <h3>A plataforma esta cheia de novas oportidades para você</h3> 
                    </div>
                </div>
            </section>

            {props.usertype === "hotel" &&
            <section id="hotel_base">
                <div class="content">
                    <div>
                        <h2>Boas vindas HOTEL!</h2>
                        <h3>Deseja cadastrar uma nova promoção?</h3>
                    </div>
                    <button onClick={() =>{window.location.href = "/promo_register"}}>Registrar nova promoção</button>
                </div>
            </section>
            }

            {props.usertype === "site" &&
            <section id="site_base">
                <div class="content">
                    <div>
                        <h2>Boas vindas SITE!</h2>
                        <h3>Deseja cadastrar uma nova promoção?</h3>
                    </div>
                    <button onClick={() =>{window.location.href = "/promo_register"}}>Registrar nova promoção</button>
                </div>
            </section>
            }

            {props.usertype === "admin" &&
            <section id="admin_base">
                <div class="content">
                    <div>
                        <h2>Boas vindas ADMIN!</h2>
                        <h3>Deseja cadastrar um novo SITE/HOTEL?</h3>
                    </div>
                    <button onClick={() =>{window.location.href = "/admin_register"}}>Registrar novo site/hotel</button>
                </div>
            </section>
            }

            <section id="promotions">
                <div class="content">
                    <div class="formu">
                        <h2>Escolha a rota e datas:</h2>
                            <table>
                            <th>
                                <p> Local: </p>
                                <input type="text" name="local" /> </th>
                            <th>
                                <p> ida: </p>
                                <input type="date" name="going_date" /> </th>
                            <th>
                                <p> Volta: </p>
                                <input type="date" name="return_date" /> </th>
                            <th>
                                <button onClick={() =>{window.location.href = "/list"}}>IR</button>
                            </th>
                        </table>   
                    </div>                    
                    <img class="plane" src={plane} /> 
                </div>
            </section>
        </>
    );
}

export default Base;
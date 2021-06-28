import "../css/section-hotel-list.css"

const promos = [
    {
        hotel : "hotel A",
        site : "site A",
        in : "A/A/A",
        out : "A/A/A",
        price : "76.50"
    },
    {
        hotel : "hotel B",
        site : "site A",
        in : "A/A/A",
        out : "A/A/A",
        price : "56.50"
    },
    {
        hotel : "hotel B",
        site : "site B",
        in : "A/A/A",
        out : "A/A/A",
        price : "46.50"
    },
    {
        hotel : "hotel B",
        site : "site A",
        in : "A/A/A",
        out : "A/A/A",
        price : "36.50"
    },
    {
        hotel : "hotel C",
        site : "site A",
        in : "A/A/A",
        out : "A/A/A",
        price : "26.50"
    },
    {
        hotel : "hotel C",
        site : "site C",
        in : "A/A/A",
        out : "A/A/A",
        price : "16.50"
    },
]

const Promo_list = (props) => {
    return (
        <>
        <section id="hotel_list">
            <div class="content">
                <table>
                    <tr>
                        <th>Nome do hotel</th>
                        <th>Nome do site</th>
                        <th>Dia do Check In</th>
                        <th>Dia do Check Out</th>
                        <th>Preço</th>
                        {props.usertype === "buyer" &&
                        <th>Comprar??????</th>
                        }
                        {props.usertype === "site" &&
                        <th>Editar</th>
                        }
                        {props.usertype === "hotel" &&
                        <th>Editar</th>
                        }
                    </tr>
                    {promos.map(el => (
                        <tr>
                        <td>{el.hotel}</td>
                        <td>{el.site}</td>
                        <td>{el.in}</td>
                        <td>{el.out}</td>
                        <td>{el.price}</td>
                        {props.usertype === "buyer" &&
                        <td>Comprar</td>
                        }
                        {props.usertype === "site" &&
                        <td>
                            <button onClick={() =>{window.location.href = "/promo_register"}}>Editar</button>
                        </td>
                        }
                        {props.usertype === "hotel" &&
                        <td>
                            <button onClick={() =>{window.location.href = "/promo_register"}}>Editar</button>
                        </td>
                        }
                        </tr>
                    ))}
                </table>
            </div>
        </section>

        {props.usertype === "site" &&
        <section id = "hotel_list_placeholder_admin_button">
            <div>
                <button onClick={() =>{window.location.href = "/promo_register"}}>Registrar nova promoção</button>
            </div>
        </section>
        }

        {props.usertype === "hotel" &&
        <section id = "hotel_list_placeholder_admin_button">
            <div>
                <button onClick={() =>{window.location.href = "/promo_register"}}>Registrar nova promoção</button>
            </div>
        </section>
        }
    </>
    );
}

export default Promo_list;
import { useState } from "react";
import './styles.css';

export default function ContactPage() {
    return (
        <div className={'ContactPage'}>
            <div className={'stepContCont'}>
                <div className={'stepContainer'}>
                    <h1>1</h1><h2>CHOOSE</h2>
                </div>
                <p>
                    Decide which candle(s) you would like to purchase, and find their order number. The order number is
                    a hashtag (#) followed by a 6 digit number.
                </p>

                <div className={'stepContainer'}>
                    <h1>2</h1><h2>ORDER</h2>
                    {/*- - - - - - - - - >*/}
                </div>
                <p>
                    Send a text, email or dm to any of the listed contact info. Include the order number of the candle(s)
                    you would like to purchase.
                </p>

                <div className={'stepContainer'}>
                    <h1>3</h1><h2>PAY & ENJOY</h2>
                </div>
                <p style={{height: 'fit-content', borderLeft: "2px solid white"}}>
                    Pickup is at memorial union, at the address listed under Contact Info.
                    Venmo, CashApp or cash is accepted at or before pickup. We do not accept checks, credit or debit cards.
                </p>
            </div>

            <div className={'stepContCont'} style={{marginLeft: '40px'}}>
                <div className={'stepContainer'}>
                    <h1 style={{
                        backgroundColor: "white",
                        color: 'var(--navy)',
                        border: '2px dashed var(--navy)'
                    }}>2</h1>
                    <h2>CONTACT INFORMATION</h2>
                </div>
                <div className={'infoCont'}>
                    <div className={'info'}>
                        <h3><strong>Instagram: </strong></h3>
                        <h3> @Ash&FlameCandleCo</h3>
                    </div>
                    <div className={'info'}>
                        <h3><strong>Phone Number: </strong></h3>
                        <h3>202-578-4645</h3>
                    </div>
                    <div className={'info'}>
                        <h3><strong>Email: </strong></h3>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <h3>ash&flameCandleCo</h3>
                            <h3>@gmail.com</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className={'info'}>
                        <h3><strong>Venmo: </strong></h3>
                        <h3>@Ash&FlameCandleCo</h3>
                    </div>
                    <div className={'info'}>
                        <h3><strong>CashApp: </strong></h3>
                        <h3>@Ash&FlameCandleCo</h3>
                    </div>
                    <hr/>
                    <div className={'info'}>
                        <h3><strong>Pickup Address: </strong></h3>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <h3>800 Langdon St</h3>
                        </div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <h3>Madison WI, 53706</h3>
                    </div>
                </div>
            </div>
        </div>
    );

    // const [formData, setFormData] = useState({ name: '', product: '', quantity: '' });
    //
    // function handleChange(e) {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }
    //
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     // TODO: send formData to your backend or service
    //     console.log(formData);
    // }
    //
    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input name="name" placeholder="Your Name" onChange={handleChange} />
    //         <input name="product" placeholder="Product Name" onChange={handleChange} />
    //         <input name="quantity" placeholder="Quantity" onChange={handleChange} />
    //         <button type="submit">Submit Order</button>
    //     </form>
    // );
}
import { useState } from "react";
import './styles.css';

export default function ContactPage() {
    return (
        <div className={'ContactPage'}>
            <div className={'stepContCont'}>
                <div className={'stepContainer'}>
                    <h1>1</h1><h2>CHOOSE</h2>
                </div>
                <p>This is a description of step 1</p>

                <div className={'stepContainer'}>
                    <h1>2</h1><h2>ORDER</h2>
                </div>
                <p>Step two</p>

                <div className={'stepContainer'}>
                    <h1>3</h1><h2>PAY & ENJOY</h2>
                </div>
                <p style={{height: 'fit-content', borderLeft: "2px solid white"}}>Step three</p>
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
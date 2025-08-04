import './styles.css';
import candleImageTest from '../images/candleTest.jpg'

function CandlePage() {
    return (
        <div className="CandlePage">
            <div className={'left'}>
                <div className={'column'}>
                    <img src={candleImageTest} alt={"candle"}/>
                    <img src={candleImageTest} alt={"candle"}/>
                    <img src={candleImageTest} alt={"candle"}/>
                    <br/>
                </div>
                <div className={'column'} style={{paddingTop: '100px'}}>
                    <img src={candleImageTest} alt={"candle"}/>
                    <img src={candleImageTest} alt={"candle"}/>
                    <img src={candleImageTest} alt={"candle"}/>
                    <br/>
                </div>
            </div>
            <div className={'right'}>
                <div>
                    <h2>UNIQUE, LOCALLY SOURCED CANDLES</h2>
                    <p>
                        Each candle is hand-poured into a carefully selected glass. No two candles are alike.
                        We source vintage and second-life glassware to give every piece a story, adding character and
                        charm you won’t find in other candles. Our sustainable, intentional, and uniquely
                        beautiful candles are designed to fill your space with both a great scent and a creative style.
                        <br/><br/>
                        We are a student owned company. All of our glassware is locally sourced.
                        <br/><br/>
                        Want to request something specific? Click Order and follow the steps!
                    </p>
                </div>

                <div>
                    <h2 style={{fontSize: '1.5em', fontWeight: '400'}}>
                        Questions? Contact Us!
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default CandlePage;

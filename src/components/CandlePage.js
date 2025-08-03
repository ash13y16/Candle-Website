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
                </div>
            </div>
            <div className={'right'}>
                <h2>THIS IS AN AWESOME TITLE FOR MY CANDLES</h2>
                <p>
                    This is some text about my super fancy epic candles that I definitely am going to make. For sure.
                    Filler text goes here yay!
                </p>
            </div>
        </div>
    );
}

export default CandlePage;

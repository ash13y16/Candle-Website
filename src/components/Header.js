import './styles.css';

function Header() {
    return (
        <div className="Header">
            <div>
                <h2 style={{textAlign: 'left', width: '100px'}}>Candles</h2>
            </div>
            <div className={'center'}>
                <h1>Ash & Flame</h1>
            </div>
            <div>
                <h2 style={{textAlign: 'right', width: '100px'}}>Order</h2>
            </div>
        </div>
    );
}

export default Header;

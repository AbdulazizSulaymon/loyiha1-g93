import "./Header.css"
import mylogo from './logo.svg';

function Header() {
    return <header className="bg-dark shadow">
        <div className="container py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img src={mylogo} className="logo" alt="" />
                <p className="fw-bold text-white mb-0">React App 1.0</p>
            </div>
            <button className="btn btn-dark">menu</button>
        </div>
    </header>
}

export default Header;
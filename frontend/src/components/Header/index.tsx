import './styles.css';

import icon from '../../assets/img/logoDSMeta.svg';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt="Logo do app" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/atrindadecarol/" target="_blank">@atrindadecarol</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
import axios from 'axios';
import './styles.css';

import icon from '../../assets/img/botaoSMS.svg';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Deu bom");
        })

}

function NotificationButton({saleId} : Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton;
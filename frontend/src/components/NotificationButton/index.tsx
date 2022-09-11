import axios from 'axios';
import './styles.css';

import icon from '../../assets/img/botaoSMS.svg';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("A mensagem de texto (SMS) foi enviada com sucesso!")
        })
}

function NotificationButton({ saleId }: Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton;
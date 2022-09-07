import NotificationButton from '../NotificationButton'
import './styles.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor </th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total </th>
                        <th>Notificar </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="show992">#341</th>
                        <th className="show576">08/07/2022</th>
                        <th>Anakin</th>
                        <th className="show992">15</th>
                        <th className="show992">11</th>
                        <th>R$ 55300.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </th>

                    </tr>
                    <tr>
                        <th className="show992">#341</th>
                        <th className="show576">08/07/2022</th>
                        <th>Anakin</th>
                        <th className="show992">15</th>
                        <th className="show992">11</th>
                        <th>R$ 55300.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th className="show992">#341</th>
                        <th className="show576">08/07/2022</th>
                        <th>Anakin</th>
                        <th className="show992">15</th>
                        <th className="show992">11</th>
                        <th>R$ 55300.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SalesCard
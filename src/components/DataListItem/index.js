import React from 'react';
import './DataListItem.css';
import img from './img/S7@2x.png';
import airplane from './img/airplane.svg';
import moment from 'moment'
import 'moment/locale/ru';

export function DataListItem({
                            departure_time,
                            arrival_time,
                            stops,
                            num,
                            origin,
                            origin_name,
                            destination_name,
                            destination,
                            departure_date,
                            arrival_date
                            }) {
    let FirstTime = moment({departure_date})
    let LastTime = moment({arrival_date})
    return (
        <li className="row">
            <div className="col-4 border_item">
            <div className="row btn_center">
                <img src={img} />
            </div>
            <div className="row btn_center btn_mr">
                <div className="btn_buy">Купить<br /> за {num}</div>
            </div>    
            </div>
            <div className="col-8 bg_1">
            <div className="row col-12 bg2">
                <div className="col-4 time"><span>{departure_time}</span></div>
                <div className="col-4 airlanes">
                    <span>{stops} Пересадки</span>
                    <img className="img_air" src={airplane} width="140%" />
                </div>
                <div className="col-4 time"><span>{arrival_time}</span></div>
            </div>
            <div className="row">
                <div className="block3_info col-5">{origin}, {origin_name} <br />
                 <span className="span_Date">{FirstTime.format('DD MMM YYYY, ddd')}</span></div>
                <div className="block4_info col-5">{destination_name}, {destination} <br />
                 <span className="span_Date2">{LastTime.format('DD MMM YYYY, ddd')}</span></div>
            </div>
            </div>
        </li>
    )

}
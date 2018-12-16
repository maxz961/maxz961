import React, {Component} from 'react'
import './ButtonCurrenty.css'

export class ButtonCurrenty extends Component {
    buttons = [
        {name: 'rub', label: 'RUB' },
        {name: 'usd', label: 'USD' },
        {name: 'eur', label: 'EUR' },
    ]

    render() {
    const {buttonFilter, onFilterChange} = this.props
    const buttons = this.buttons.map(({name, label}) => {
        const isActive = buttonFilter === name
        const clazz = isActive ? 'click' : ''
        return (
                <div key={name} className={`btnOne ${name} ${clazz}`} onClick={()=> onFilterChange(name)}>
                    {label}
                </div>
        )
    })
    return(
        <div className="btn_margin">
            <p className="textButton">ВАЛЮТА</p>
            {buttons}
        </div>
    )
    }
}
import React from 'react'
import './CheckedBlock.css';

export function CheckedBlock(props) {
    let only = props.filter !== 'all' ? <span className="only" onClick={ props.uncheckAll }>Только</span> : null;
  
    return (
      <div className="checkedHover" onClick={ () => props.toggle(props.name) }>
        <div className={props.checked ? 'radio_div_checked' : 'radio_div'}>
        <span className={props.checked ? 'checkmark' : 'checkmark checked_none'}>
          <div className='checkmark_stem'></div>
          <div className='checkmark_kick'></div>
        </span>
        </div><input className="radio" type="checkbox" checked={ props.checked }/>
        { props.text }
        { only }
      </div>
    );
  }
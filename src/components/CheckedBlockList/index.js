import React from 'react';
import './CheckedBlockList.css'

import {CheckedBlock} from '../CheckedBlock';

export function CheckedBlockList(props) {
  return (
    <div>
      { props.checkboxes.map((checkbox) => {
        return (
          <CheckedBlock
            name={ checkbox.name }
            checked={ checkbox.checked }
            text={ checkbox.text }
            toggle={ props.toggle }
            uncheckAll={ props.uncheckAll }
            filter={ checkbox.filter }
            key={ checkbox.name }
          />
        );
      }) }
    </div>
  );
}
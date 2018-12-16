import React, {Component} from 'react'
import './Filter.css'
import {CheckedBlockList} from '../CheckedBlockList'

export class Filter extends Component {
    state = {
      checkboxes: [
        {
          name: 'all',
          checked: true,
          filter: 'all',
          text: 'Все'
        },
        {
          name: 'without-stop',
          checked: false,
          filter: 0,
          text: 'Без пересадок'
        },
        {
          name: '1-stop',
          checked: false,
          filter: 1,
          text: '1 пересадка'
        },
        {
          name: '2-stop',
          checked: false,
          filter: 2,
          text: '2 пересадка'
        },
        {
          name: '3-stop',
          checked: false,
          filter: 3,
          text: '3 пересадка'
        }
      ]
    };
  
    componentWillMount() {
      this.filter();
    }
  
    filter = () => {
      let checkboxes = [ ...this.state.checkboxes ];
  
      let filters = checkboxes.filter((checkbox) => {
        return checkbox.checked;
      }).map((checkbox) => {
        return checkbox.filter;
      });
  
      this.props.filter(filters);
    };
  
    toggleCheckbox = (checkboxName) => {
      let checkboxes = [ ...this.state.checkboxes ];
      let toggleCheckboxIndex = checkboxes.findIndex((checkbox) => {
        return checkbox.name === checkboxName;
      });
  
  
      if (checkboxes[ toggleCheckboxIndex ].filter === 'all' && !checkboxes[ toggleCheckboxIndex ].checked) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = checkbox.filter === 'all';
          return checkbox;
        });
      } else {
        let checkboxAllIndex = checkboxes.findIndex((checkbox) => {
          return checkbox.filter === 'all';
        });
        
        checkboxes[ checkboxAllIndex ].checked = false;
        checkboxes[ toggleCheckboxIndex ].checked = !checkboxes[ toggleCheckboxIndex ].checked;
      }
  
      this.setState({
        checkboxes: checkboxes
      });
  
      this.filter();
    };
  
    uncheckAllCheckboxes = () => {
      let checkboxes = [ ...this.state.checkboxes ];
      let newCheckboxes = checkboxes.map((checkbox) => {
        checkbox.checked = false;
  
        return checkbox;
      });
  
      this.setState({
        checkboxes: newCheckboxes
      });
    };
  
    render() {
      return (
        <div className="boss">
          <p className="text_checked">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
          <CheckedBlockList
            checkboxes={ this.state.checkboxes }
            toggle={ this.toggleCheckbox }
            uncheckAll={ this.uncheckAllCheckboxes }
            filter={ this.props.filter }
          />
        </div>
      );
    }
  }
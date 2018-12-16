import React, {Component} from 'react';
import './DataList.css';
import {DataListItem} from '../DataListItem';

export class DataList extends Component {
  render() {
    const {num, filteredData} = this.props
    let elements = filteredData.length ? filteredData.map((item, index) => {
      return <DataListItem {...item} num={num[index]} key={ item.id }/>;
    }) : <span>Упс, ничего не найдено :с</span>;
    return (
      <ul >
        { elements }
      </ul>
    );
  }
  }
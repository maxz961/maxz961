import React, { Component } from 'react';
import tickets from './tickets.json';
import './App.css';
import {DataList} from './components/DataList'
import {Filter} from './components/Filter'
import {ButtonCurrenty} from './components/ButtonCurrenty'

class App extends Component {

  constructor() {
    super()
    tickets.tickets.reduce((prevId, ticket) => {
      ticket.id = prevId
      return prevId + 1
    }, 0)

  this.state = {
    data: tickets.tickets,
    filteredData: tickets.tickets,
    buttonFilter: ''
  }
  }

  filterTickets = (filters) => {
    let data = [ ...this.state.data ];

    let filteredData = data.filter((ticket) => {
      return filters.some((filter) => {
        return ticket.stops === filter || filter === 'all';
      })
    })

    this.setState({
      filteredData: filteredData
    })
  }

  buttonFilter(items, buttonFilter) {
    switch(buttonFilter) {
      case 'rub':
        return items.map((item) => (item.price).toFixed() + ' ₽')
      case 'usd':
        return items.map((item) => (item.price / 67).toFixed() + ' $')
      case 'eur':
        return items.map((item) => (item.price / 78).toFixed() + ' €') 
      default: return items.map((item) => item.price + '₽')
    }
  }

  onFilterChange = (buttonFilter) => {
    this.setState({buttonFilter})
  }


  render() {
    const { filteredData, buttonFilter} = this.state
    const num = this.buttonFilter(filteredData, buttonFilter)
    return (
      <div className='bg'>
        <div className='col-3 fl'>
          <div className="row">
            <ButtonCurrenty buttonFilter={buttonFilter} onFilterChange={this.onFilterChange}/>
          </div>
          <div className="row">
            <Filter filter={ this.filterTickets }/>
          </div>  
        </div>
        <div className='col-9 fr'>
          <DataList num={num} filteredData={filteredData}/>
        </div>
      </div>
    )
  }
}

export default App

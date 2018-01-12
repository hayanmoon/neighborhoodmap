import React, { Component } from 'react'
import {
  Dropdown,
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import { filters, locations, googleMapApi, neighboorhoodApi } from './constants'
import { ToastContainer, toast } from 'react-toastify'
import Map from './components/Map'
import MapList from './components/MapList'
import ItemModal from './components/ItemModal';

import 'semantic-ui-css/semantic.min.css'
import './App.css'

class App extends Component {
  state = {
    filter: '',
    isModalOpen: false,
    isLoading: false,
    content: '',
    data: locations
  }

  changeFilter = (event, data) => {
    this.setState({ filter: data.value })
  }

  //set animation for specific location
  changeAnimation = (previousState, id, animation) => {
    return previousState.data.map(location => {
      if (location.value === id) {
        return {
          ...location,
          animation
        }
      }
      return location
    })
  }

  //
  onItemClick = id => {
    const url = `${neighboorhoodApi}/${id}`

    //set loading and marker to bounce
    this.setState(prevState => {
      return {
        isLoading: true,
        data: this.changeAnimation(prevState, id, 1)
      }
    })

    //fetch  data on list item
    //display modal if successful
    //display toast if there is an error when fetching
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState(prevState => {
          return {
            isModalOpen: true,
            content: data,
            isLoading: false,
          }
        })
      })
      .catch(() => {
        this.setState(prevState => {
          return {
            isLoading: false,
            data: this.changeAnimation(prevState, id, 2)
          }
        })
        toast.error('Unable to fetch information.', {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }

  closeModal = (currentId) => {
    this.setState((prevState) => {
      return {
        isModalOpen: false,
        content: '',
        data: this.changeAnimation(prevState, currentId, 2)
      }
    })
  }

  render() {
    const { filter, data } = this.state
    const currentLocations = filter
      ? data.filter(location => location.type === filter)
      : data
    const currentId = this.state.content ? this.state.content.id : ''

    return (
      <Container className="App">
        <Dropdown
          placeholder="Filter Location"
          fluid
          selection
          options={filters}
          value={filter}
          onChange={this.changeFilter}
          className="filter"
        />
        <Map
          onItemClick={this.onItemClick}
          googleMapURL={googleMapApi}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          locations={currentLocations}
        />
        <MapList locations={currentLocations} onItemClick={this.onItemClick} />
        <Dimmer active={this.state.isLoading}>
          <Loader>Loading...</Loader>
        </Dimmer>
        <ItemModal
          isModalOpen={this.state.isModalOpen}
          onClose={() => this.closeModal(currentId)}
          content={this.state.content}
        />
        <ToastContainer hideProgressBar autoClose={1500}/>
      </Container>
    )
  }
}

export default App

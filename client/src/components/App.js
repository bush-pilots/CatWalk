import React from 'react';
import CowList from './CowList.js';
import CreateCow from './CreateCow.js';
import CowModal from './CowModal.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: [],
      modal: false,
      modalView: {}
    }
    this.createCow = this.createCow.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getCows = this.getCows.bind(this);
  }

  createCow(newCow) {
    var arr = newCow.split('-').map(e => (e.trim()));
    var options = {
      name: arr[0],
      description: arr[1]
    }
    axios.post('http://localhost:3000/api/cows', options)
    .then((result) => {
      this.getCows();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getCows() {
    axios.get('http://localhost:3000/api/cows')
    .then((result) => {
      this.setState({
        view: result.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  openModal(cow) {
   this.setState({
     modal: true,
     modalView: cow
   })
  }
  closeModal() {
    this.setState({
      modal: false
    })
  }

  componentDidMount() {
    this.getCows();
  }

  render() {

    return (
    <div>
      Cow List
      <div>
        { this.state.modal === true ? <CowModal cow={this.state.modalView} closeModal={this.closeModal}/> : null }
        <CreateCow onCreate={this.createCow}/>
        <div>
          <CowList openModal={this.openModal} cows={this.state.view} getCows={this.getCows}/>
        </div>
      </div>
    </div>
    )

  }


}


export default App;





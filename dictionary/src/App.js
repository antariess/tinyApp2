import React, { Component } from 'react';
import Definition from './Definition'
import './App.css';
import SearchField from './SearchField';

class App extends Component {
  state = {
    word: {
      word: 'popcorn',
      phonetic: "ˈpɒpkɔːn",
      meaning:  "maize of a variety with hard kernels that swell up and burst open when heated",
      example: "pop yourself some popcorn"
    }
  }

  render() {
    return (
      <div>
        <h1>Find the definition of anything!</h1>
        <SearchField searchWord = {this.searchWord}/>
        <Definition word={this.state.word}/>
      </div>
    )
  }

  searchWord = event => {
    event.preventDefault()
    const options = {
      credentials: 'include',  
      mode: 'no-cors',
      method: "GET",
      headers: {
      "Accept": "application/json",
      "app_id": "60b278a9",
      "app_key": "a4e068626b93768ec457c4a4d5f865a5"
    }}
   
    fetch('https://od-api.oxforddictionaries.com:443/api/v1/entries/en/cat', options)
    .then(console.log)
    // .then(res => res.json())
    .then(console.log)
    .catch(console.log)
    // const newWord = {
    //   word : 'stuff'
    // }
    // this.setState({

    // })
  }
  

}

export default App;

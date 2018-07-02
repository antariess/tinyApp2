import React from 'react'

class SearchField extends React.Component {
state = {
  inputValue: ''
}

  render() {
    return (
      <form onSubmit={this.props.searchWord}>
        <input onChange={this.handleInputChange} type="text" placeholder="Search for a word here"/>
        <button type="submit" >GO!</button>
      </form>
    )
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
}

export default SearchField
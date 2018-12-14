import React from 'react';
import './App.css';

class ItemForm extends React.Component {
  state = { newItem: '' }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    // this.setState({ word e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addItem(this.state.newItem)
    this.setState({ newItem: '' })
  }

  render() {
    const {newItem} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        name='newItem'
        value={newItem}
        required
        placeholder='Add Item'
        onChange={this.handleChange}
      />
      </form>
    )
  }
}

export default ItemForm;

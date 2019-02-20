import React from 'react';
import { connect } from 'react-redux';
import { itemsActions } from '../../actions';

class ItemsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(itemsActions.createItem(this.state));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Item Name:
          <input type='text' onChange={this.handleChange('name')} />
        </label>
        <label>
          Item Description:
          <input type='text' onChange={this.handleChange('description')} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

const mapStateToProps = store => {
  return {
    items: store.itemsReducer
  };
};

export default connect(mapStateToProps)(ItemsForm);

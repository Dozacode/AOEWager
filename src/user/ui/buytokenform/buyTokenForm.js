import React, { Component } from 'react'

class buyTokenform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: this.props.num || 10
    }
  }
  onInputChange(event){
    this.setState({num: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onbuyTokenformSubmit(this.state.num)
    return console.log("Great Success!");
  }
  render() {
    return (
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
      <fieldset>
      <input id="num" type="number" value={this.state.num} onChange={this.onInputChange.bind(this)} placeholder="Num"/>
<div>{this.props.num}</div>
<button type="submit" className="pure-button pure-button-primary"> Buy AOE Token</button>
</fieldset>
</form>
  )
    }
  }
export default buyTokenform

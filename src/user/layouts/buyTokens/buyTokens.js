import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'
import DepositFormContainer from '../../ui/depositform/DepositFormContainer'
import buyTokensformcontainer from '../../ui/buytokenform/buyTokenformcontainer'


class buyTokens extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Buy AOE Tokens</h1>
            <p>Edit your account details here.</p>
            <ProfileFormContainer />
              <buyTokensformcontainer/>

          </div>
          <div className="pure-u-1-1">
            <h1>Current AOE Balance</h1>
            <p>AOE Tokens: 10</p>
          </div>
        </div>
      </main>
    )
  }
}

export default buyTokens

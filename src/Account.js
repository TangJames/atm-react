import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    };
  }

  handleDepositClick(e) {
    e.preventDefault();
    let amount = this.inputBox.value;
    let newBalance = this.state.balance + amount;
    this.setState ({
      balance: newBalance
    });
    this.inputBox.value = '';
  }

  handleWithdrawClick(e) {
    e.preventDefault();
    let amount = parseFloat(this.inputBox.value);
    if(amount < this.state.balance) {
      let newBalance = this.state.balance - amount;

      this.setState({
        balance: newBalance
      });
      this.inputBox.value = '';
    } else {
      alert("Not enough funds!");
    }
  }
  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
    balanceClass += ' zero';
  }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}

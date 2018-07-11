import React, { Component } from "react";
import "./Style.css";

class AccountingInput extends Component {
  constructor() {
    super();
    this.state = {
      categoryValue: {},
      expenseCategory: {},
      incomeCategory: {},
      valuesFromInput: {},
      projects: []
    };
  }
  static defaultProps = {
    categories: ["Income", "Expenses"]
  };
  handleAccount(e) {
    const newDate = new Date().toLocaleDateString();
    const newTime = new Date().toLocaleTimeString();

    if (
      (this.refs.description.value === "" && this.refs.amount.value === "") ||
       this.refs.description.value === "" ||
       this.refs.amount.value === ""
      )
      {
        alert("hi u should write something ");
      } else {
      this.setState(
        {
          valuesFromInput: {
            description: this.refs.description.value,
            amount: Number(this.refs.amount.value),
            Category: this.refs.category.value,
            date: newDate,
            time: newTime
          }
        },
        function() {
          console.log(this.state.valuesFromInput);
          this.props.displayData(this.state.valuesFromInput);
        }
      );
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category}>{category}</option>;
    });
    return (
    <div className="InputValues">
    <form onSubmit={e => (e.preventDefault(),
       this.handleAccount(),
       this.handleIncome)}>
    <input className="Description_text" placeholder="Enter Description" ref="description"/>
          <input className="Amount_text" placeholder="Amount" ref="amount" />
          <select className="Option_BTn" ref="category">{categoryOptions}</select>
          <input className="Add_button" type="submit" value="Add Transaction" />
        </form>
      </div>
    );
  }
}
export default AccountingInput;

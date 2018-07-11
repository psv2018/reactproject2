import React, { Component } from "react";
import AccountingInput from "./AccountingInput";

let income_sum = 0;
  const projects = [
    {
      description: "Income from Photography",
      amount: 300,
      Category: "Income",
      date: "12/3/2018",
      time: "11:40:24 AM"
    },
    {
      description: "Rent for our house",
      amount: 100,
      Category: "Expenses",
      date: "06/3/2018",
      time: "11:40:24 AM"
    },
    {
      description: "day care payment",
      amount: 100,
      Category: "Income",
      date: "12/5/2018",
      time: "11:40:24 AM"
    },
    {
      description: "day care for Karthik",
      amount: 100,
      Category: "Expenses",
      date: "12/5/2018",
      time: "11:40:24 AM"
    },

    {
      description: "Dance program",
      amount: 100,
      Category: "Income",
      date: "10/6/2018",
      time: "11:40:24 AM"
    }
  ];

class AccountResults extends Component {
  constructor() {
    super();
    this.state = {
      projects: projects,
      incomeCategory: [],
      expenseCategory: [],
      getByAmount: [],
      incomeSum: [],
 //     hasError:false
    };
  }
  handleData(inputValues) {
    let projects = this.state.projects;
    projects.push(inputValues);
    this.setState({ projects: projects });
  }
  // componentDidCatch(error, info) {
  //   this.setState({ hasError: true });
  //   logErrorToMyService(error, info);
  // }

  render() {
    
    let incomeCategory = this.state.projects.filter(income => {return income.Category === "Income";});
    let expenseCategory = this.state.projects.filter(expense => {return expense.Category === "Expenses";});
   
    let totalIncome = incomeCategory.map(item => item.amount).reduce((prev, next) => prev + next);
    console.log(totalIncome);
    let totalExpenses = expenseCategory.map(item => item.amount).reduce((prev, next) => prev + next);
    let netIncome = totalIncome - totalExpenses;

    let expensesoutput = expenseCategory.map(projectExpenses => {
      return (
        <div className="printingOutput">
          <div> {projectExpenses.description}</div>
          <div className="amount_style"> {projectExpenses.amount}</div>
          <div>{projectExpenses.date}</div>
          <div>{projectExpenses.time}</div>
        </div>
      );
    });
    //printing income values
    let incomesoutput = incomeCategory.map(projectincome => {
      return (
        <div className="printingOutput" >
          <div> {projectincome.description}</div>
          <div> {projectincome.amount}</div>
          <div>{projectincome.date}</div>
          <div>{projectincome.time}</div>
        </div>
      );
    });
       return (
      <div className="Accountheader">
        <AccountingInput className="inputSection" displayData={this.handleData.bind(this)} />
        <div className="wrappingOutput">
          <h1>Income</h1>
          <h1>Expenses</h1>
          <div className="expensessection">{incomesoutput}</div>
          <div className="expensessection">{expensesoutput}</div>
        </div>
        <div className="netIncome">
          <h1>Balance</h1>
          <div>{netIncome}</div>
        </div>
      </div>
    );
  }
}

export default AccountResults;

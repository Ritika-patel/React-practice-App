// import React from "react";
// import ReactDOM from "react-dom";
// // import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
// import "normalize.css/normalize.css";
// import './styles/style.scss';
// import AppRouter from './routers/AppRouter'

// // const ExpenseDashboardPage = () => (
//     <div>
//         This is my ExpenseDashboardPage
//     </div>
// )

// const AddExpensePage = () => (
//     <div>
//         This is my AddExpensePage
//     </div>
// )
// const EditExpensePage = () => (
//     <div>
//         This is my EditExpensePage
//     </div>
// )
// const HelpPage = () => (
//     <div>
//         This is my HelpPage
//     </div>
// )

// const NotFoundPage  = () => (
//     <div>
//      404 - <Link to="/">Go-home</Link> {/*link do not allow to refres home page wvwert time we click any link  */}
//     </div>
// )
// const Header  = () => (
//     <header>
//       <h1>Expensify</h1>
//       <ul>
//      <li> home - <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink></li>
//      <li>AddExpense - <NavLink to="/create" activeClassName="is-active">Add-Expense</NavLink></li>
//      <li>EditExpense - <NavLink to="/edit" activeClassName="is-active">Edit-Expense</NavLink></li>
//      <li>Help - <NavLink to="/help" activeClassName="is-active">help</NavLink></li>
//       </ul>
//     </header>
// )

//navlinks allow us to bold tha text in which page we are currenty in

// const routes = (
// <BrowserRouter>
// <div>
// <Header/> 
// <Switch>
//   <Route path="/" component={ExpenseDashboardPage} exact={true}/>
//   <Route path="/create" component={AddExpensePage} />
//   <Route path="/help" component={HelpPage} />
//   <Route path="/Edit" component={EditExpensePage}/>
//   <Route path="*" component={NotFoundPage} />
//   </Switch>
//   </div>
// </BrowserRouter>
// )
// switch helps us so that 404 do not comw in all page 
// exact helps us so that "/" path is not defines for others, otherwise every page will show the components in home page 

// ReactDOM.render(<AppRouter/>, document.getElementById("app"));



import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));

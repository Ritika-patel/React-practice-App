import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/portfolioItemPage';
import PortfolioPage from '../components/portfolioPage';
const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/> 
    <Switch>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/contact" component={ContactPage} />
      <Route path="/portfolio" component={PortfolioPage} exact={true}/>
      <Route path="/portfolio/:id" component={PortfolioItemPage}/>
      <Route path="*" component={NotFoundPage} />
      </Switch>
      </div>
    </BrowserRouter>
    )

    export default AppRouter
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { IndexView } from '../scripts/views/IndexView';
import { AboutView } from '../scripts/views/AboutView';

const Router = ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={IndexView} />
      <Route path="/about" component={AboutView} />
    </div>
  </BrowserRouter>
), document.getElementById('app'));

export { Router };

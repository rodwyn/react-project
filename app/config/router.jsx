import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { IndexView } from '../scripts/views/IndexView';
import { AboutView } from '../scripts/views/AboutView';
import { Example01 } from '../scripts/views/Example01';
import { MyCourses } from '../scripts/views/MyCourses';

const Router = ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={IndexView} />
      <Route path="/about" component={AboutView} />
      <Route path="/example01" component={Example01}  />
      <Route path="/mycourses" component={MyCourses} />
    </div>
  </BrowserRouter>
), document.getElementById('app'));

export { Router };

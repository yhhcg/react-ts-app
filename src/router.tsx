import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Spin } from 'antd';

const TodoList = lazy(() => import('./pages/TodoList'));
const TodoListHook = lazy(() => import('./pages/TodoListHook'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/todoListHook" component={TodoListHook} />
      </Suspense>
    </Router>
  );
};

export default AppRouter;

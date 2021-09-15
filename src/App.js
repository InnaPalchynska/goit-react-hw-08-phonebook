import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import './App.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LogInView = lazy(() => import('./views/LogInView.js'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LogInView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
  );
}

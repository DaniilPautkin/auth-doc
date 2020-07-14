import 'antd/dist/antd.css'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './redux/redux-store'
import RegisterContainer from './components/Auth/Registration/RegisterContainer'
import LoginContainer from './components/Auth/Login/LoginContainer'
import MainAuthContainer from './components/Main/MainContainer'
import setAuthToken from './components/utils/setAuthToken'
import { logoutUser, authActions } from './redux/auth-reducer'
import jwt_decode from 'jwt-decode'
import { StyledMainContainer } from './styles/app-styles'

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken
  setAuthToken(token)

  const decoded = jwt_decode<any>(token)
  store.dispatch(authActions.setCurrentUser(decoded))

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
      logoutUser()
  }
}

const App = () => {
    return (
      <StyledMainContainer>
        <Provider store={store}>
            <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <MainAuthContainer />}
                        />
                        <Route
                            exact
                            path="/auth/register"
                            render={() => <RegisterContainer />}
                        />
                        <Route
                            exact
                            path="/auth/login"
                            render={() => <LoginContainer />}
                        />
                    </Switch>
            </BrowserRouter>
        </Provider>
        </StyledMainContainer>
    )
}

export default App

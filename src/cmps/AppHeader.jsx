import { NavLink } from 'react-router-dom'
import { LoginSignup } from './LoginSignup'
import { useSelector } from 'react-redux'

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)

  function onLogout() {
    userService.logout()
        .then(() => {
            // DONE: use dispatch
            onSetUser(null)
        })
        .catch((err) => {
            showErrorMsg('OOPs try again')
        })
}

function onSetUser(user) {
    // DONE: use dispatch
    // setUser(user)
    dispatch({ type: SET_USER, user })
    navigate('/')
}

  return (
    <header className="app-header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/toy">Toys</NavLink>
      {user ? (
        <section>
          <span to={`/user/${user._id}`}>
            Hello {user.fullname} <span>${user.score.toLocaleString()}</span>
          </span>
          <button onClick={onLogout}>Logout</button>
        </section>
      ) : (
        <section>
          <LoginSignup onSetUser={onSetUser} />
        </section>
      )}
    </header>
  )
}

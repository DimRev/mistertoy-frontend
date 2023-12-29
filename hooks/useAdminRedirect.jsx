import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useAdminRedirect = (redirect = true) => {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)

  if (redirect) {
    const navigate = useNavigate()

    useEffect(() => {
      if (!user?.isAdmin) {
        navigate('/')
      }
    }, [user, navigate])
  }
  return user?.isAdmin
}

export default useAdminRedirect

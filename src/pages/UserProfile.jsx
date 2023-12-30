import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UserProfileCard } from './UserProfileCard'
import { getUserById } from '../store/actions/user.actions'

export function UserProfile() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const [fullUser, setFullUser] = useState(null)
  const { userId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?._id !== userId) {
      navigate('/')
    }
    getUserById(user._id).then((newUser) => {
      setFullUser((prevUser) => ({ ...prevUser, ...newUser }))
    })
  }, [])

  if (user?._id !== userId || !fullUser) return <></>

  function onEditUser(user){
    setFullUser(user)
  }

  return (
    <section className="page user-profile-page">
      <UserProfileCard fullUser={fullUser} onEditUser={onEditUser}/>
    </section>
  )
}

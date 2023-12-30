import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { UserProfileCard } from './UserProfileCard'
import { getUserById } from '../store/actions/user.actions'

export function UserProfile() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const { userId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?._id !== userId) {
      navigate('/')
    }
  }, [])

  if (user?._id !== userId) return <></>

  return (
    <section className="page user-profile-page">
      <Outlet />
    </section>
  )
}

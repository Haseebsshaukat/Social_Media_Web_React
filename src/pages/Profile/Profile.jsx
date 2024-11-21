import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx'
import PostSide from '../../components/PostSide/PostSide.jsx'
import RightSide from '../../components/RightSide/RightSide.jsx'

const Profile = () => { 
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile
import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal.jsx/ProfileModal'

const InfoCard = () => {

    const[modelOpened , setModalOpened] =useState(false)
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem'onClick={()=>setModalOpened(true)} />
                <ProfileModal modelOpened={modelOpened} 
                              setModalOpened={setModalOpened}
                />
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>IN Relationships</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Multan</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>ZainKeepscode inst</span>
        </div>
        <button className='button logout-button'>
            LogOut
        </button>
    </div>

  )
}

export default InfoCard
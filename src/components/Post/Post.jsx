import React from 'react'
import './Post.css'

import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { ColorInput } from '@mantine/core'

const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />
        <div className="postReact">
            <img src={data.liked?Heart:NotLike} alt="" />
            <img src={Comment}alt="" />
            <img src={Share} alt="" />
        </div>
        
        <span style={{color : "var --gray",fontSize:'12px'}}>{data.likes}Likes</span>
        <dic className="detail">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </dic>
    </div>
  )
}

export default Post
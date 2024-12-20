import React from 'react'
import'./TrendCard.css'
import { TrendData } from '../../Data/TrendData'
const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {TrendData.map((trend)=>{
            return (
                <div className='Trend'>
                    <span>#{trend.name}</span>
                    <span>{trend.shares} K Shares</span>

                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
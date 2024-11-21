import React from 'react'
import '../style/Title.css'

const Title = ({subTitle, title ,summary}) => {
  return (
    <div className='title'>
        <p className='subtitle'>{subTitle}</p>
        <h2>{title}</h2>
        <p className='story'>{summary}
        </p>
    </div>
  )
}

export default Title
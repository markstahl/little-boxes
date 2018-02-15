import React from 'react';
import List from './List'

const Picture = props => {
  return (
    <div className='box picture'>
      <h1>{props.header}</h1>
      <img alt={props.imageAlt} src={props.imageSrc}/>
      <List/>
    </div>
  )
}

export default Picture;

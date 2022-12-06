import React from 'react'

export default function TrainButton(props) {
  return (
    <button onClick={()=> {props.setMode('training')}}>training</button>
  )
}

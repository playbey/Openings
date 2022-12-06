import React from 'react'

export default function AddButton(props) {
  return (
    <button onClick={()=> {props.setMode('add'); props.setTrainStatus('')}}>add line</button>
  )
}

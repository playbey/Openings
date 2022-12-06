import React from 'react'

export default function BuildButton(props) {
  return (
    <button onClick={()=> {props.setMode('build'); props.setTrainStatus('')}}>build line</button>
  )
}

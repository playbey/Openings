import React from 'react'

export default function RestartButt(props) {
  return (
 <button onClick={()=> {props.setBoard(props.initialBoard); props.setTrainStatus(''); props.setBoards([props.initialBoard])}}>restart</button>
  )
}

import React from 'react'

export default function BackButton(props) {
  const newBoards = props.boards.filter((e, i) => i < (props.boards.length - 1) )
  return (
    <button onClick={()=> {props.setBoards([...newBoards]); props.setBoard(props.boards[props.boards.length - 1]); props.setTrainStatus('')}}>back</button>
  )

}

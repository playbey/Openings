import React from 'react'
import '../styles/Board.css'

export default function Square(props) {
  const obj = {p: 'pawn', N: 'knight', B: 'bishop', R: 'rook', Q: 'queen', K: 'king'}
const image = `/${props.color === 'whit' ? 'pieces/w' : 'blackpieces/'}${obj[props.piece]}.png`
  
function dragStartHanlder(e, props) {
props.mover(props)
  }

  function dragOverHandler(e) {
e.preventDefault()
  }

  function dropHandler(e, props) {
    e.preventDefault()
    props.mover(props)
  }

return (
    <div className={props.col} onClick={() => {props.mover(props)}} draggable={true} 
    onDragStart={(e) => dragStartHanlder(e, props)} 
    onDragOver={(e) => dragOverHandler(e)} 
    onDrop={(e) => dropHandler(e, props)}>
        {props.piece 
        ? <img src={image} alt='' width={40} height={40}></img>
        : <div/>
      }
    
    </div>
  )
}

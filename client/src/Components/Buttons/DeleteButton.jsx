import React from 'react'

export default function DeleteButton(props) {
  async function deleter() {
    props.setTrainStatus('')
    await fetch('http://localhost:3001/delete',
    {
      method: "DELETE",
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
    },
    body:  JSON.stringify({
      board: props.board,
      prevBoard: props.boards[props.boards.length - 1],
  }),
  })
  }
  return (
    <button onClick={deleter}>delete</button>
  )
}

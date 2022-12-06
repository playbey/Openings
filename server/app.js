const express = require('express');
const app = express();
const cors = require('cors');
const { Move } = require('./db/models')

const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.post('/add', async (req, res) => {
  const prevBoard = JSON.stringify(req.body.prevBoard)
  let board = req.body.board
  board[req.body.value.i].piece = board[req.body.move.square].piece
  board[req.body.value.i].color = board[req.body.move.square].color
  board[req.body.move.square].piece = ''
  board[req.body.move.square].color = ''
  board = JSON.stringify(board)

  const moveCheck = await Move.findOne({ where: { board, prevBoard } })

  if (!moveCheck) {
    await Move.create({ board, prevBoard })
  }
  res.sendStatus(200)
})

app.delete('/delete', async (req, res) => {
  const board = JSON.stringify(req.body.board)
  const prevBoard = JSON.stringify(req.body.prevBoard)

  const moveCheck = await Move.findOne({ where: { board, prevBoard } })
  if (moveCheck) {
    await Move.destroy({ where: { board, prevBoard } })
  }
  res.sendStatus(200)
})

app.post('/train', async (req, res) => {
  const prevBoard = JSON.stringify(req.body.prevBoard)
  let board = req.body.board
  board[req.body.value.i].piece = board[req.body.move.square].piece
  board[req.body.value.i].color = board[req.body.move.square].color
  board[req.body.move.square].piece = ''
  board[req.body.move.square].color = ''
  board = JSON.stringify(board)
  const myMove = await Move.findOne({ where: { board, prevBoard } })
  if (!myMove) {
    return res.sendStatus(202)
  }
  const moveCheck = await Move.findAll({ where: { prevBoard: board } })
  if (moveCheck.length === 0) {
    return res.sendStatus(201)
  } else {
    return res.send(moveCheck[Math.floor(Math.random() * moveCheck.length)])
  }
})

app.listen(PORT, () => {
  console.log('Server start on port', PORT);
});

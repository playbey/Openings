import React, { useState } from 'react'
import '../styles/Board.css'
import AddButton from './Buttons/AddButton'
import BackButton from './Buttons/BackButton'
import BuildButton from './Buttons/BuildButton'
import DeleteButton from './Buttons/DeleteButton'
import RestartButt from './Buttons/RestartButt'
import TrainButton from './Buttons/TrainButton'
import Square from './Square'


export default function Board() {


  const [board, setBoard] = useState([
    { piece: 'R', square: 'a8', color: 'blac' },
    { piece: 'N', square: 'b8', color: 'blac' },
    { piece: 'B', square: 'c8', color: 'blac' },
    { piece: 'Q', square: 'd8', color: 'blac' },
    { piece: 'K', square: 'e8', color: 'blac' },
    { piece: 'B', square: 'f8', color: 'blac' },
    { piece: 'N', square: 'g8', color: 'blac' },
    { piece: 'R', square: 'h8', color: 'blac' },
    { piece: 'p', square: 'a7', color: 'blac' },
    { piece: 'p', square: 'b7', color: 'blac' },
    { piece: 'p', square: 'c7', color: 'blac' },
    { piece: 'p', square: 'd7', color: 'blac' },
    { piece: 'p', square: 'e7', color: 'blac' },
    { piece: 'p', square: 'f7', color: 'blac' },
    { piece: 'p', square: 'g7', color: 'blac' },
    { piece: 'p', square: 'h7', color: 'blac' },
    { piece: '', square: 'a6' },
    { piece: '', square: 'b6' },
    { piece: '', square: 'c6' },
    { piece: '', square: 'd6' },
    { piece: '', square: 'e6' },
    { piece: '', square: 'f6' },
    { piece: '', square: 'g6' },
    { piece: '', square: 'h6' },
    { piece: '', square: 'a5' },
    { piece: '', square: 'b5' },
    { piece: '', square: 'c5' },
    { piece: '', square: 'd5' },
    { piece: '', square: 'e5' },
    { piece: '', square: 'f5' },
    { piece: '', square: 'g5' },
    { piece: '', square: 'h5' },
    { piece: '', square: 'a4' },
    { piece: '', square: 'b4' },
    { piece: '', square: 'c4' },
    { piece: '', square: 'd4' },
    { piece: '', square: 'e4' },
    { piece: '', square: 'f4' },
    { piece: '', square: 'g4' },
    { piece: '', square: 'h4' },
    { piece: '', square: 'a3' },
    { piece: '', square: 'b3' },
    { piece: '', square: 'c3' },
    { piece: '', square: 'd3' },
    { piece: '', square: 'e3' },
    { piece: '', square: 'f3' },
    { piece: '', square: 'g3' },
    { piece: '', square: 'h3' },
    { piece: 'p', square: 'a2', color: 'whit' },
    { piece: 'p', square: 'b2', color: 'whit' },
    { piece: 'p', square: 'c2', color: 'whit' },
    { piece: 'p', square: 'd2', color: 'whit' },
    { piece: 'p', square: 'e2', color: 'whit' },
    { piece: 'p', square: 'f2', color: 'whit' },
    { piece: 'p', square: 'g2', color: 'whit' },
    { piece: 'p', square: 'h2', color: 'whit' },
    { piece: 'R', square: 'a1', color: 'whit' },
    { piece: 'N', square: 'b1', color: 'whit' },
    { piece: 'B', square: 'c1', color: 'whit' },
    { piece: 'Q', square: 'd1', color: 'whit' },
    { piece: 'K', square: 'e1', color: 'whit' },
    { piece: 'B', square: 'f1', color: 'whit' },
    { piece: 'N', square: 'g1', color: 'whit' },
    { piece: 'R', square: 'h1', color: 'whit' }
  ])

  const initialBoard = [
    { piece: 'R', square: 'a8', color: 'blac' },
    { piece: 'N', square: 'b8', color: 'blac' },
    { piece: 'B', square: 'c8', color: 'blac' },
    { piece: 'Q', square: 'd8', color: 'blac' },
    { piece: 'K', square: 'e8', color: 'blac' },
    { piece: 'B', square: 'f8', color: 'blac' },
    { piece: 'N', square: 'g8', color: 'blac' },
    { piece: 'R', square: 'h8', color: 'blac' },
    { piece: 'p', square: 'a7', color: 'blac' },
    { piece: 'p', square: 'b7', color: 'blac' },
    { piece: 'p', square: 'c7', color: 'blac' },
    { piece: 'p', square: 'd7', color: 'blac' },
    { piece: 'p', square: 'e7', color: 'blac' },
    { piece: 'p', square: 'f7', color: 'blac' },
    { piece: 'p', square: 'g7', color: 'blac' },
    { piece: 'p', square: 'h7', color: 'blac' },
    { piece: '', square: 'a6' },
    { piece: '', square: 'b6' },
    { piece: '', square: 'c6' },
    { piece: '', square: 'd6' },
    { piece: '', square: 'e6' },
    { piece: '', square: 'f6' },
    { piece: '', square: 'g6' },
    { piece: '', square: 'h6' },
    { piece: '', square: 'a5' },
    { piece: '', square: 'b5' },
    { piece: '', square: 'c5' },
    { piece: '', square: 'd5' },
    { piece: '', square: 'e5' },
    { piece: '', square: 'f5' },
    { piece: '', square: 'g5' },
    { piece: '', square: 'h5' },
    { piece: '', square: 'a4' },
    { piece: '', square: 'b4' },
    { piece: '', square: 'c4' },
    { piece: '', square: 'd4' },
    { piece: '', square: 'e4' },
    { piece: '', square: 'f4' },
    { piece: '', square: 'g4' },
    { piece: '', square: 'h4' },
    { piece: '', square: 'a3' },
    { piece: '', square: 'b3' },
    { piece: '', square: 'c3' },
    { piece: '', square: 'd3' },
    { piece: '', square: 'e3' },
    { piece: '', square: 'f3' },
    { piece: '', square: 'g3' },
    { piece: '', square: 'h3' },
    { piece: 'p', square: 'a2', color: 'whit' },
    { piece: 'p', square: 'b2', color: 'whit' },
    { piece: 'p', square: 'c2', color: 'whit' },
    { piece: 'p', square: 'd2', color: 'whit' },
    { piece: 'p', square: 'e2', color: 'whit' },
    { piece: 'p', square: 'f2', color: 'whit' },
    { piece: 'p', square: 'g2', color: 'whit' },
    { piece: 'p', square: 'h2', color: 'whit' },
    { piece: 'R', square: 'a1', color: 'whit' },
    { piece: 'N', square: 'b1', color: 'whit' },
    { piece: 'B', square: 'c1', color: 'whit' },
    { piece: 'Q', square: 'd1', color: 'whit' },
    { piece: 'K', square: 'e1', color: 'whit' },
    { piece: 'B', square: 'f1', color: 'whit' },
    { piece: 'N', square: 'g1', color: 'whit' },
    { piece: 'R', square: 'h1', color: 'whit' }
  ]


  const [boards, setBoards] = useState([initialBoard]
  )

  const [trainStatus, setTrainStatus] = useState('')

  const trainStatuses = {
    200: '',
    201: 'the end',
    202: 'wrong'
  }

  const [mode, setMode] = useState('build')



  const [ep, setEp] = useState()
  let epEvent = 0
  let castleEvent = [0, 0]

  let order = boards.length % 2 === 1 ? 1 : -1
  const [move, setMove] = useState({ first: '', second: '' })
  const linesArr = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }

  const [castle, setCastle] = useState([1, 1, 1, 1])

  function checkMove(start, end, checkOrder, exeption = [-1, -1]) {

    if (checkOrder && typeof (end.i) === 'string') {
      end.i = board.findIndex(ind => ind.square === end.i)
    }
    if ((start.color === 'whit' && order === -1 && checkOrder !== 1) || (start.color === 'blac' && order === 1 && checkOrder !== 1)) {
      return false
    }

    if (start.piece === 'p') {
      if (board[end.i].piece.length > 0 || end.i === exeption[1]) {
        if (start.color === 'whit' && (board[end.i].color === 'blac' || end.i === exeption[1]) && ((start.square - end.i) === 7
          || (start.square - end.i) === 9)) {
          setEp()
          return true
        } else if (start.color === 'blac' && (board[end.i].color === 'whit' || end.i === exeption[1]) && ((start.square - end.i) === (-7)
          || (start.square - end.i) === (-9))
        ) {
          setEp()
          return true
        } else {
          return false
        }
      } else if ((start.color === 'whit' && (start.square - end.i) === 8 && end.i !== exeption[1])
        || (start.color === 'blac' && (start.square - end.i) === -8 && end.i !== exeption[1])) {
        setEp()
        return true
      } else if ((start.color === 'whit' && (start.square - end.i) === 16
        && start.square > 47 && start.square < 56 && board[start.square - 8].piece.length === 0)
        || (start.color === 'blac' && (start.square - end.i) === -16 && start.square > 7
          && start.square < 16 && board[start.square + 8].piece.length === 0)) {
        setEp(end.i)
        if (checkOrder) {
          if (end.i === exeption[1]) {
            return false
          }
        }
        return true
      } else if (start.square === ep + 1 || start.square === ep - 1) {
        epEvent = 1
        setEp()
        return true
      }
    }

    if (start.piece === 'N') {
      setEp()
      const abs = Math.abs(start.square - end.i)
      if ((abs === 6 || abs === 10 || abs === 15 || abs === 17) && board[end.i].color !== start.color) {
        return true
      }
    }

    if (start.piece === 'B') {
      setEp()
      const abs = Math.abs(start.square - end.i)
      if ((abs % 9 === 0 || abs % 7 === 0) && board[end.i].color !== start.color) {
        const diag = abs % 9 === 0 ? 9 : 7
        let bishopCheck = 1
        for (let i = 1; i < abs / diag; i++) {
          if (start.square - end.i > 0) {
            bishopCheck = (board[start.square - i * diag].piece.length === 0 || exeption[0] === start.square - i * diag) && exeption[1] !== start.square - i * diag ? bishopCheck : 0
          } else {
            bishopCheck = (board[start.square + i * diag].piece.length === 0 || exeption[0] === start.square + i * diag) && exeption[1] !== start.square + i * diag ? bishopCheck : 0
          }
        }
        return bishopCheck ? true : false
      }
    }

    if (start.piece === 'R') {
      setEp()
      if ((board[start.square].square[0] === board[end.i].square[0]
        || board[start.square].square[1] === board[end.i].square[1]) && board[end.i].color !== start.color) {
        if (board[start.square].square[1] === board[end.i].square[1]) {
          const rookMove = board.filter((el, ind) => ((ind > start.square && ind < end.i)
            || (ind < start.square && ind > end.i)) && ((el.piece.length !== 0 || ind === exeption[1]) && ind !== exeption[0])).length === 0
          if (rookMove !== false) {
            if (start.square === 0) {
              setCastle(castle.map((el, i) => i === 2 ? 0 : el))
            } else if (start.square === 7) {
              setCastle(castle.map((el, i) => i === 3 ? 0 : el))
            } else if (start.square === 56) {
              setCastle(castle.map((el, i) => i === 0 ? 0 : el))
            } else if (start.square === 63) {
              setCastle(castle.map((el, i) => i === 1 ? 0 : el))
            }
            return rookMove
          }
        } else {
          const rookMove = board.filter((el, ind) => el.square[0] === board[end.i].square[0] && (el.piece.length !== 0 || ind === exeption[1]) && ind !== exeption[0]
            && (ind < Math.max(start.square, end.i) && ind > Math.min(start.square, end.i))).length === 0
          if (rookMove !== false) {
            if (start.square === 0) {
              setCastle(castle.map((el, i) => i === 2 ? 0 : el))
            } else if (start.square === 7) {
              setCastle(castle.map((el, i) => i === 3 ? 0 : el))
            } else if (start.square === 56) {
              setCastle(castle.map((el, i) => i === 0 ? 0 : el))
            } else if (start.square === 63) {
              setCastle(castle.map((el, i) => i === 1 ? 0 : el))
            }
            return rookMove
          }
        }
      }
    }

    if (start.piece === 'K') {
      setEp()
      if (((board[start.square].square[0] === board[end.i].square[0] && Math.abs(start.square - end.i) === 8)
        || (board[start.square].square[1] === board[end.i].square[1] && Math.abs(linesArr[board[start.square].square[0]] - linesArr[board[end.i].square[0]]) === 1)
        || ((Math.abs(start.square - end.i) === 7 || Math.abs(start.square - end.i) === 9) && Math.abs(linesArr[board[start.square].square[0]] - linesArr[board[end.i].square[0]]) === 1)
      ) && board[end.i].color !== start.color) {
        if (start.color === 'whit' && start.square === 60) {
          setCastle(castle.map((el, i) => i === 0 || i === 1 ? 0 : el))
        } else if (start.color === 'blac' && start.square === 4) {
          setCastle(castle.map((el, i) => i === 2 || i === 3 ? 0 : el))
        }
        return true
      } else if (start.square === 60 && (end.i === 63 || end.i === 62) && castle[1] === 1 && board[61].piece === '' && board[62].piece === '') {
        castleEvent = [1, 1]
        return true
      }
      else if (start.square === 60 && (end.i === 56 || end.i === 58) && castle[0] === 1 && board[59].piece === '' && board[58].piece === '' && board[57].piece === '') {
        castleEvent = [1, 0]
        return true
      }
      else if (start.square === 4 && (end.i === 0 || end.i === 2) && castle[2] === 1 && board[1].piece === '' && board[2].piece === '' && board[3].piece === '') {
        castleEvent = [1, 2]
        return true
      }
      else if (start.square === 4 && (end.i === 7 || end.i === 6) && castle[3] === 1 && board[6].piece === '' && board[6].piece === '') {
        castleEvent = [1, 3]
        return true
      }
    }

    if (start.piece === 'Q') {
      setEp()
      if ((board[start.square].square[0] === board[end.i].square[0]
        || board[start.square].square[1] === board[end.i].square[1]) && board[end.i].color !== start.color) {
        if (board[start.square].square[1] === board[end.i].square[1]) {
          return board.filter((el, ind) => ((ind > start.square && ind < end.i)
            || (ind < start.square && ind > end.i)) && ((el.piece.length !== 0 || ind === exeption[1]) && ind !== exeption[0])).length === 0
        } else {
          return board.filter((el, ind) => el.square[0] === board[end.i].square[0] && (el.piece.length !== 0 || ind === exeption[1]) && ind !== exeption[0]
            && (ind < Math.max(start.square, end.i) && ind > Math.min(start.square, end.i))).length === 0
        }
      }

      const abs = Math.abs(start.square - end.i)
      if ((abs % 9 === 0 || abs % 7 === 0) && board[end.i].color !== start.color) {
        const diag = abs % 9 === 0 ? 9 : 7
        let bishopCheck = 1
        for (let i = 1; i < abs / diag; i++) {
          if (start.square - end.i > 0) {
            bishopCheck = (board[start.square - i * diag].piece.length === 0 || exeption[0] === start.square - i * diag) && exeption[1] !== start.square - i * diag ? bishopCheck : 0
          } else {
            bishopCheck = (board[start.square + i * diag].piece.length === 0 || exeption[0] === start.square + i * diag) && exeption[1] !== start.square + i * diag ? bishopCheck : 0
          }
        }
        return bishopCheck ? true : false
      }
    }

    return false
  }

  async function mover(value) {

    if (!move.first.piece) {
      setMove({ first: { piece: value.piece, square: value.i, color: value.color }, second: '' })
    } else {
      const check = checkMove(move.first, value)
      if (check) {
        const promotion = ((move.first.piece === 'p' && (value.i < 8 || value.i > 55)) ? 'Q' : move.first.piece);

        const checker = board.filter(el => el.piece !== '' && el.color !== move.first.color)

        for (let i = 0; i < checker.length; i++) {
          var checkerRes = 0
          let startCheck = { piece: checker[i].piece, color: checker[i].color, square: board.findIndex(ind => ind.square === checker[i].square) }
          let endCheck = {
            piece: 'K', color: move.first.color, i: move.first.piece === 'K'
              ? value.i : board.filter(el => el.piece === 'K' && el.color === move.first.color)[0].square
          }
          let exeption = [move.first.square, value.i]
          if (value.i !== startCheck.square) {
            let checkCheck = checkMove(startCheck, endCheck, 1, exeption)
            if (checkCheck === 1 || checkCheck === true) {
              i = checker.length
              checkerRes = 1
            }
          }
        }

        if (checkerRes === 1) {
          return
        }
        if (!epEvent && castleEvent[0] !== 1) {
          setBoard(board.map((el, i) => i === move.first.square ? el = { piece: '', square: el.square, color: '' } : el)
            .map((el, i) => i === value.i ? el = { piece: promotion, square: el.square, color: move.first.color } : el))
        } else if (epEvent && castleEvent[0] !== 1) {
          setBoard(board.map((el, i) => i === move.first.square ? el = { piece: '', square: el.square, color: '' } : el)
            .map((el, i) => i === value.i ? el = { piece: move.first.piece, square: el.square, color: move.first.color } : el)
            .map((el, i) => i === ep ? el = { piece: '', square: el.square, color: '' } : el))
        } else if (castleEvent[0] === 1 && (castleEvent[1] === 1 || castleEvent[1] === 3)) {
          setBoard(board.map((el, i) => i === move.first.square || i === move.first.square + 3 ? el = { piece: '', square: el.square, color: '' } : el)
            .map((el, i) => i === move.first.square + 2 ? el = { piece: move.first.piece, square: el.square, color: move.first.color } : el)
            .map((el, i) => i === move.first.square + 1 ? el = { piece: 'R', square: el.square, color: move.first.color } : el))
        } else if (castleEvent[0] === 1 && (castleEvent[1] === 0 || castleEvent[1] === 2)) {
          setBoard(board.map((el, i) => i === move.first.square || i === move.first.square - 4 ? el = { piece: '', square: el.square, color: '' } : el)
            .map((el, i) => i === move.first.square - 2 ? el = { piece: move.first.piece, square: el.square, color: move.first.color } : el)
            .map((el, i) => i === move.first.square - 1 ? el = { piece: 'R', square: el.square, color: move.first.color } : el))
        }
        setBoards([...boards, board])
        if (mode === 'add') {
          await fetch('http://localhost:3001/add',
            {
              method: "POST",
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                move: move.first,
                value: value,
                board: board,
                prevBoard: board,
              }),
            })
        } else if (mode === 'training') {
          await fetch('http://localhost:3001/train',
            {
              method: "POST",
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                move: move.first,
                value: value,
                board: board,
                prevBoard: board,
              }),
            })
            .then((response) => {
              setTrainStatus(trainStatuses[response.status])
              if (response.status === 200) {
                return response.json()
                  .then((data) => {
                    setBoard(JSON.parse(data.board))
                    setBoards([...boards, board, JSON.parse(data.prevBoard)])
                  })
              }
            })

        }
        setMove({ first: '', second: '' })
      } else {
        setMove({ first: '', second: '' })
      }
    }
  }
  return (
    <div>
      <div className='board'>
        {board.map((el, i) =>
          <Square piece={el.piece} square={el.square} color={el.color} i={i} mover={mover}
            col={Math.ceil((i + 1) / 8) % 2 === 1 ? (i % 2 === 0) ? 'white' : 'black' : (i % 2 === 0) ? 'black' : 'white'} key={i} />
        )}
      </div>
      <div>
        <BuildButton setMode={setMode} setTrainStatus={setTrainStatus} />
        <TrainButton setMode={setMode} />
        <AddButton setMode={setMode} setTrainStatus={setTrainStatus} />
        {boards.length > 1 ?
          <BackButton setTrainStatus={setTrainStatus} setBoard={setBoard} boards={boards} setBoards={setBoards} />
          : <></>}

        <RestartButt setBoards={setBoards} setTrainStatus={setTrainStatus} setBoard={setBoard} initialBoard={initialBoard} />
        <DeleteButton setTrainStatus={setTrainStatus} board={board} boards={boards} />
      </div>
      <div>{trainStatus}</div>
    </div>
  )
}

import React from 'react'

function Definition (props) {
  const {word} = props
  return (
    <div>
      <h2>{word.word.toUpperCase()}</h2>
      <p>{word.phonetic}</p>
      <p>{word.meaning}</p>
      <p>"{word.example}" - said Jimmy</p>
    </div>
  )
}

export default Definition
import React from 'react'

const Home = (props) => {
  console.log(props)
  return (
    <div>Home{props.match}</div>
  )
}

export default Home
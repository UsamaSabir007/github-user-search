import React from 'react'

const User = ({ name, url, avatar_url }) => {
  return (
    <div className='user'>
      <img src={avatar_url} width="50" height="50" />
      <a href={url} target="_blank">{name}</a>
    </div>
  )
}

export default User

import React from 'react'
import User from './User'

const Users = ({ results }) => {
  return (
    <div className='users'>
      {results?.map((user) => (
        <User key={user.login} name={user.login} avatar_url={user.avatar_url} url={user.html_url} />     
      ))}
    </div>
  )
}

export default Users

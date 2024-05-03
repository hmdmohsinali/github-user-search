import React from 'react';

const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, url, name, login } = user;
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-72 md:w-96 bg-white rounded-lg shadow-lg m-4 p-6'>
          <img className='w-48 h-48 mb-3 rounded-full shadow-lg mx-auto' src={avatar_url} alt='User Avatar' />
          <a href={`https://github.com/${login}`} className='block text-center font-bold'>{name || login}</a>
          <p className='text-center'>Follower: {followers}</p>
          <p className='text-center'>Following: {following}</p>
          <p className='text-center'>Public Repos: {public_repos}</p>
        </div>
      </div>
    </div>
  );
};

export default User;

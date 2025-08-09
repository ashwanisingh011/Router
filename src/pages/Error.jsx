import React from 'react'
// rrd imports
import { useRouteError, Link, useNavigate } from 'react-router-dom'

// Library imports
import { HomeIcon } from '@heroicons/react/24/solid'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'
const Error = () => {
const error = useRouteError()
const navigate = useNavigate();
  return (
    <div className='error'>
      <h1>Uh oh! we get an error!</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className='btn btn--dark'
        onClick={()=>navigate(-1)} // IT will navigate back to the pervious page.
        >
          <ArrowUturnLeftIcon width={20}/>
          <span>Go Back</span>
        </button>
        <Link
          to='/'
          className='btn btn--dark'
        >
          <HomeIcon width={20}/>
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error

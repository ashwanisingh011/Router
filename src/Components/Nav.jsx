// Import from React router dom
import { Form, NavLink } from 'react-router-dom'
//assets import
import logomark from '../assets/logomark.svg'
//icons import
import { TrashIcon } from '@heroicons/react/24/outline'

const Nav = ({userName}) => {
  return (
    <nav>
    <NavLink
    to="/"
    aria-label='Go to home page'
    >
        <img src={logomark} height={30} />
        <span>HomeBudget</span>
    </NavLink>
    {
        userName && (
            <Form
            method='post'
            action='/logout'
            onSubmit={(e)=>{
                if(!confirm("Are you sure you want to logout?")){
                    e.preventDefault();
                }
            }}
            >
            <button type='submit' className='btn btn--warning'>
                <span>Delete User</span>
                <TrashIcon width={20}/>
            </button>
            </Form>
        )
    }
    </nav>
  )
}

export default Nav

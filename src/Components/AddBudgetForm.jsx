// Library imports
import { CurrencyRupeeIcon } from '@heroicons/react/24/solid'
import React from 'react'
// rrd imports
import { Form } from 'react-router-dom'
function AddBudgetForm() {
  return (
    <div className='form-wrapper'>
      <h2 className="h3">
        Create Budget
      </h2>
      <Form
        method='post'
        className='grid-sm'
      >
        <div className='grid-xs'>
            <label htmlFor='newBudget'>Budget Name</label>
            <input 
            type="text"
            name='newBudget' 
            id='newBudget' 
            placeholder='e.g. Groceries'
            />
            <div className='grid-xs'>
                <label htmlFor="newBudgetAmount">Amount</label>
                <input 
                type="number"
                step='0.01' // This is accept numbers with up to 2 decimal places.
                name='newBudgetAmount'
                id='newBudgetAmount'
                placeholder='e.g., ₹1000'
                required
                inputMode='decimal' // This will show the decimal keyboard on mobile devices.
                />
            </div>
            <input type="hidden" name='_action' value='createBudget' />
            <button 
                type='submit'
                className='btn btn--dark'
                >
                    <span>Create budget</span>
                    <CurrencyRupeeIcon width={20}/>
                </button>
        </div>
      </Form>
    </div>
  )
}

export default AddBudgetForm

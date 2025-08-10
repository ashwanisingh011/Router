// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({name, amount})=>{
  const newItem = {
    id: crypto.randomUUID(), // This will generate some randome id's.
    name: name,
    createAt: Date.now(),
    amount: +amount,
  }
}

// delete item
export const deleteUser = ({ key }) => {
  return localStorage.removeItem(key)
}
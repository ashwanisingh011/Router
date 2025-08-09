// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";


// components
import Intro from "../components/Intro";

//  helper functions
import { fetchData } from "../helpers"
import AddBudgetForm from "../Components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data)
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating your account.")
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      {userName ? (<div className="dashboard">
        <h1>Welcome back, <span className="accent">{userName}</span></h1>
        <div className="grid-sm">
          <div className="flex-lg">
            <AddBudgetForm />
          </div>
        </div>
      </div>) : <Intro />}
      
    </>
  )
}
export default Dashboard
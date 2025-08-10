// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../Components/Intro";

//  helper functions
import { fetchData } from "../helpers";
import AddBudgetForm from "../Components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // newUser submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }
  
  if(_action === 'createBudget'){
    try {
      return toast.success("Budget created!")
    } catch (error) {
      throw new Error("There was a problem creating your budget.");
    }
  }


}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <div className="flex-lg">
              <AddBudgetForm />
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;

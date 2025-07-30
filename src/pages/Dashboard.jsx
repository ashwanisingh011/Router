
// rrd import 
import { useLoaderData } from 'react-router-dom';
// helper functions
import { fetchData } from '../helpers';

// loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    return {userName}
}

function Dashboard() {
  const {userName} = useLoaderData()

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      Dashboard
    </div>
  )
}

export default Dashboard

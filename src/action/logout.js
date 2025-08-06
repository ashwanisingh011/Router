// rrd imports
import { redirect } from "react-router-dom";
// helper function import
import { deleteUser } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction(){
    // delete user
     deleteUser({key: "userName"});
    // return redirect
    toast.success("You'ev successfully logged out.");
    return redirect("/"); // This will redirect to the main page after logout.
}
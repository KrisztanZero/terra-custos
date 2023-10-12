import Cookies from "universal-cookie";

export default function LogoutButton({setUser}){
    const handleLogout= (e)=>{
        e.preventDefault();
        setUser(null);
        const cookies = new Cookies();
        cookies.remove("sessionToken");
    }
    return(
        <span className="text-warning" onClick={handleLogout}>Logout</span>
    )
}
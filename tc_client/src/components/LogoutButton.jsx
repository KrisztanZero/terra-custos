export default function LogoutButton({setUser}){
    const handleLogout= (e)=>{
        e.preventDefault();
        setUser(null);
    }
    return(
        <span className="text-warning" onClick={handleLogout}>Logout</span>
    )
}
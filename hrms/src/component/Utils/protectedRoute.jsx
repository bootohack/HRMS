import {Navigate} from 'react-router-dom';

export default function ProtectedRoute({children, allowedRoles=[]}) {
    const token =localStorage.getItem("token");

    const user= JSON.parse(localStorage.getItem("user"));
    console.log(user,email);

    if (!token){
        return <Navigate to="/"/>;

    }
    if(allowRoutes.length> 0 && !allowedRoles.includes(user.role)){
        return <Navigate to="/home" replace/>;
    }
    return children;;
}

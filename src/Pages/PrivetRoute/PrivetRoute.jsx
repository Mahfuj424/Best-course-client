/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (user) {
        return children
    }

    if (loading) {
       return  <progress className="progress progress-success w-56"></progress>
    }

    

    return (
        <Navigate to='/login' state={{from: location}}></Navigate>
    );
};

export default PrivetRoute;
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";

const AdminRouter = ({ element }) => {
  const { user, loading } = useFirebase();
  const location = useLocation();

  if (loading) {
    return (
      <div className='h-screen text-2xl flex justify-center items-center'>
        <p>Loading ....</p>
      </div>
    );
  }
  return user ? (
    element
  ) : (
    <Navigate to='/log-in' state={{ from: location }}></Navigate>
  );
};

export default AdminRouter;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "./redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { confirmDelete, showError, showLoading, successDelete } from "./Alert";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);

  //get users
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //delete user
  const handleDelete = (user) => {
    confirmDelete(user).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(user.id));
        successDelete(user);
      }
    });
  };
  //loading alert
  useEffect(() => {
    if (loading) {
      showLoading();
    } else {
      setTimeout(() => {
        Swal.close();
      }, 1000);
    }
  }, [loading]);
  //error alert
  useEffect(() => {
    if (error) {
      showError();
    }
  }, [error]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">User List</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?.id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

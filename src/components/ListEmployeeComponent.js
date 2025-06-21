import React, { useState, useEffect } from 'react';
import EmployeeService from '../Services/EmployeeService';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      EmployeeService.deleteEmployee(employeeId)
        .then(() => {
          getAllEmployees();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h2 className='text-primary'>🚀 List of Employees</h2>
        <Link to="/add-employee" className='btn btn-success shadow'>
          <FaPlus className="me-2" />
          Add Employee
        </Link>
      </div>

      <table className='table table-hover table-bordered rounded shadow'>
        <thead className='table-dark text-center'>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-muted">
                No employees found.
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    className='btn btn-info btn-sm me-2'
                    to={`/edit-employee/${employee.id}`}
                  >
                    <FaEdit /> Update
                  </Link>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;

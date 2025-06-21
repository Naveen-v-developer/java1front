import React, { useState, useEffect } from 'react';
import EmployeeService from '../Services/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmailId] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstname, lastname, email };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then(() => {
          alert('🎉 Employee updated successfully!');
          navigate('/employees');
        })
        .catch((error) => console.log(error));
    } else {
      EmployeeService.createEmployee(employee)
        .then(() => {
          alert('✅ Employee added successfully!');
          navigate('/employees');
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstname);
          setLastName(response.data.lastname);
          setEmailId(response.data.email);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="card col-md-6 shadow-lg border-primary">
          <div className="card-body bg-light">
            {/* 👇 Title displayed correctly here */}
            <h2 className="text-center text-primary mb-4">
              {id ? (
                <>
                  <i className="fas fa-edit me-2"></i>Update Employee
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus me-2"></i>Add Employee
                </>
              )}
            </h2>

            <form>
              <div className="form-group mb-3">
                <label className="form-label">
                  <i className="fas fa-user text-secondary me-2"></i>First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">
                  <i className="fas fa-user-tag text-secondary me-2"></i>Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label">
                  <i className="fas fa-envelope text-secondary me-2"></i>Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn btn-success w-50"
                  onClick={saveOrUpdateEmployee}
                >
                  <i className="fas fa-check-circle me-2"></i>
                  {id ? 'Update' : 'Submit'}
                </button>
                <Link to="/employees" className="btn btn-outline-danger w-50">
                  <i className="fas fa-times-circle me-2"></i>Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;

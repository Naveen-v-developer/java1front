import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'https://java1-2.onrender.com/api/v1/employees'

class EmployeesService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId)
    }
    updateEmployee(employeeId,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId,employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId)
    }
}

export default new EmployeesService();

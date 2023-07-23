import { base_url } from '../util/appConstants'
// import { baseUrl1 } from '../util/AppConstants2'
import axios from 'axios'

export function addUser(user) {
    return axios.post(base_url+"/register",user);
}

export function getUserbyId(userId) {
    return axios.get(base_url + "/getUser/" + userId)
}

export function login(user){
    return axios.get(base_url + "/login",user)
}

export function signUp() {
    return axios.post(base_url+"/signUp")
}

// export function listOfCustomers() {
//     return axios.get(baseUrl + "/getAllCustomers");
// }

// export function getCustomerById(customerId) {
//     return axios.get(baseUrl + "/getCustomerById/" + customerId);
// }

// export function addCustomer(customer) {
//     return axios.post(baseUrl+"/addCustomer", customer)
// }

// export function updateCustomer(customer) {
//     return axios.post(baseUrl+"/updateCustomer", customer)
// }

// export function deleteCustomer(customerId) {
//     return axios.delete(baseUrl+"/deleteCustomer/"+customerId)
// }

// export function signUp() {
//     return axios.delete(baseUrl1+"/signUp")
// }

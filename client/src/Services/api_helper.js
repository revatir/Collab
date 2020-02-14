import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// AUTH

// LOGIN
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  return resp.data.user;
}

// REGISTER
export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/signup', registerData);
    console.log(resp)
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.id);
    localStorage.setItem('name', resp.data.username);
    localStorage.setItem('email', resp.data.email);
    return resp.data;
  } catch (e) {
    console.log(e.response);
    if (e.response.status === 422) {
      return { errorMessage: "Email is already associated with a user, please login to continue" }
    }
  }
}

// VERIFY USER
export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

// COMPANY CRUD
// GET ALL COMPANIES
export const indexAllCompanies = async () => {
  const resp = await api.get('/companies');
  return resp.data;
}

// GET USER COMPANY
export const showCompany = async (id) => {
  const resp = await api.get(`/users/${id}/companies`);
  return resp.data;
}

//POST COMPANY
export const createCompany = async (postData, id) => {
  const resp = await api.post(`/users/${id}/companies`, postData);
  return resp.data;
}

// // UPDATE COMPANY
// export const putCompany = async (id, postData) => {
//   const resp = await api.put(`/todos/${id}`, postData);
//   const todo = { id: id, title: resp.data.data }
//   return todo;
// }

// REVIEW CRUD

// GET REVIEWS
export const showReviews = async (id) => {
  const resp = await api.get(`/users/${id}/companies/${id}/reviews`);
  return resp.data;
}

//POST REVIEWS
export const createReview = async (id, postData) => {
  const resp = await api.post(`/users/${id}/companies/${id}/reviews`, postData);
  return resp.data;
}

//DELETE REVIEWS
export const deleteReview = async (userId, reviewId) => {
  const resp = await api.delete(`/users/${userId}/companies/${userId}/reviews/${reviewId}`);
  return resp.data;
}


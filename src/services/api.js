import axios from "axios";
import config from "./config.js";

function signin(body) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/sign-in`, body);
}

function signup(body) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/sign-up`, body);
}

function getProfileAndAddress(token) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/profile`, config(token));
}

function createProfileAndAddress(body, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/profile`, body, config(token));
}

function updateProfileAndAddress(body, token) {
  return axios.put(`${process.env.EXPO_PUBLIC_API_URL}/profile`, body, config(token));
}

function deleteProfileAndAddress(profileId, token) {
  return axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/profile/${profileId}`, config(token));
}

function getAllProducts() {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/products`);
}

function getProductsById(productId) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`);
}

function createProducts(body, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/products`, body, config(token));
}

function updateProducts(productId, body, token) {
  return axios.update(`${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`, body, config(token));
}

function deleteProducts(productId, token) {
  return axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`, config(token));
}

function getAllPractices() {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/practices`);
}

function createPractices(body, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/practices`, body, config(token));
}

function createPracticeAdvantage(practiceId, body, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/practices/advantage/${practiceId}`, body, config(token));
}

function updatePractices(productId, body, token) {
  return axios.update(`${process.env.EXPO_PUBLIC_API_URL}/practices/${productId}`, body, config(token));
}

function deletePractices(productId, token) {
  return axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/practices/${productId}`, config(token));
}

function getAllForums() {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/forum`);
}

function getForum(category) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/forum/${category}`);
}

function createPost(category, body, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/posts/${category}`, body, config(token));
}

function getPosts(token) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/posts`, config(token));
}

function updatePost(postId, body, token) {
  return axios.put(`${process.env.EXPO_PUBLIC_API_URL}/posts/${postId}`, body, config(token));
}

function deletePost(postId, token) {
  return axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/posts/${postId}`, config(token));
}

function getComments(token) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/comments`, config(token));
}

function createComment(body, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/comments`, body, config(token));
}

function updateComment(commentId, body, token) {
  return axios.put(`${process.env.EXPO_PUBLIC_API_URL}/comments/${commentId}`, body, config(token));
}

function deleteComment(commentId, token) {
  return axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/comments/${commentId}`, config(token));
}

function getUserProducts(token) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/user-products`, config(token));
}

function getUserProductsById(productId, token) {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/user-products/${productId}`, config(token));
}

function addUserProduct(productId, token) {
  return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/user-products/${productId}`, body, config(token));
}

function deleteUserProduct(productId, token) {
  return axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/user-products/${productId}`, config(token));
}

function urlMetadata(link) {
  return axios.get(`https://jsonlink.io/api/extract?url=${link}`);
}

const api = {
  signin, signup,
  getProfileAndAddress, createProfileAndAddress, updateProfileAndAddress, deleteProfileAndAddress,
  getProductsById, getAllProducts, createProducts, updateProducts, deleteProducts,
  getAllPractices, createPractices, createPracticeAdvantage, updatePractices, deletePractices,
  getForum, getAllForums,
  createPost, getPosts, updatePost, deletePost,
  getComments, createComment, updateComment, deleteComment,
  getUserProducts, getUserProductsById, addUserProduct, deleteUserProduct,
  urlMetadata,
};
export default api;
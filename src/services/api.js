import axios from "axios";
import config from "./config.js";

function signin(body, success, failure) {
  axios
    .post(`${process.env.EXPO_PUBLIC_API_URL}/sign-in`, body)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function signup(body, success, failure) {
  axios
    .post(`${process.env.EXPO_PUBLIC_API_URL}/sign-up`, body)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getProfileAndAddress(token, success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/profile`, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function createProfileAndAddress(body, token, success, failure) {
  axios
    .post(`${process.env.EXPO_PUBLIC_API_URL}/profile`, body, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function updateProfileAndAddress(body, token, success, failure) {
  axios
    .put(`${process.env.EXPO_PUBLIC_API_URL}/profile`, body, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function deleteProfileAndAddress(profileId, token, success, failure) {
  axios
    .delete(
      `${process.env.EXPO_PUBLIC_API_URL}/profile/${profileId}`,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getAllProducts(success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/products`)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getProductsById(productId, success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function createProducts(body, token, success, failure) {
  axios
    .post(`${process.env.EXPO_PUBLIC_API_URL}/products`, body, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function updateProducts(productId, body, token, success, failure) {
  axios
    .update(
      `${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function deleteProducts(productId, token, success, failure) {
  axios
    .delete(
      `${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getAllPractices(success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/practices`)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function createPractices(body, token, success, token) {
  axios
    .post(`${process.env.EXPO_PUBLIC_API_URL}/practices`, body, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function createPracticeAdvantage(practiceId, body, token, success, failure) {
  axios
    .post(
      `${process.env.EXPO_PUBLIC_API_URL}/practices/advantage/${practiceId}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function updatePractices(productId, body, token, success, failure) {
  axios
    .update(
      `${process.env.EXPO_PUBLIC_API_URL}/practices/${productId}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function deletePractices(productId, token, success, failure) {
  axios
    .delete(
      `${process.env.EXPO_PUBLIC_API_URL}/practices/${productId}`,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getAllForums(success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/forum`)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getForum(category, success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/forum/${category}`)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function createPost(category, body, token, success, failure) {
  axios
    .post(
      `${process.env.EXPO_PUBLIC_API_URL}/posts/${category}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getPosts(token, success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/posts`, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function updatePost(postId, body, token, success, failure) {
  axios
    .put(
      `${process.env.EXPO_PUBLIC_API_URL}/posts/${postId}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function deletePost(postId, token, success, failure) {
  axios
    .delete(`${process.env.EXPO_PUBLIC_API_URL}/posts/${postId}`, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getComments(token, success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/comments`, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function createComment(body, token, success, failure) {
  axios
    .post(`${process.env.EXPO_PUBLIC_API_URL}/comments`, body, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function updateComment(commentId, body, token, success, failure) {
  axios
    .put(
      `${process.env.EXPO_PUBLIC_API_URL}/comments/${commentId}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function deleteComment(commentId, token, success, failure) {
  axios
    .delete(
      `${process.env.EXPO_PUBLIC_API_URL}/comments/${commentId}`,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getUserProducts(token, success, failure) {
  axios
    .get(`${process.env.EXPO_PUBLIC_API_URL}/user-products`, config(token))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function getUserProductsById(productId, token, success, failure) {
  axios
    .get(
      `${process.env.EXPO_PUBLIC_API_URL}/user-products/${productId}`,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function addUserProduct(productId, token, success, failure) {
  axios
    .post(
      `${process.env.EXPO_PUBLIC_API_URL}/user-products/${productId}`,
      body,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function deleteUserProduct(productId, token, success, failure) {
  axios
    .delete(
      `${process.env.EXPO_PUBLIC_API_URL}/user-products/${productId}`,
      config(token)
    )
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

function urlMetadata(link, success, failure) {
  axios
    .get(`https://jsonlink.io/api/extract?url=${link}`)
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      console.error(err);
      failure(err.response.data);
    });
}

const api = {
  signin,
  signup,
  getProfileAndAddress,
  createProfileAndAddress,
  updateProfileAndAddress,
  deleteProfileAndAddress,
  getProductsById,
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getAllPractices,
  createPractices,
  createPracticeAdvantage,
  updatePractices,
  deletePractices,
  getForum,
  getAllForums,
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getComments,
  createComment,
  updateComment,
  deleteComment,
  getUserProducts,
  getUserProductsById,
  addUserProduct,
  deleteUserProduct,
  urlMetadata,
};
export default api;

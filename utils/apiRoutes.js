// API calls to the backend
import axios from "axios";

// GET - All categories
export const getAllCategories = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/categories`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - All recipes
export const getAllRecipes = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/all`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipes by category name
export const getRecipesByCategoryName = async (categoryName) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/category/${categoryName}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipes by recipe name
export const getRecipesByRecipeName = async (recipeName) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/name/${recipeName}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipe info by recipeId
export const getRecipeInfo = async (recipeId) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/${recipeId}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipe categories by recipeId
export const getRecipeCategories = async (recipeId) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/categories`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipe ingredients by recipeId
export const getRecipeIngredients = async (recipeId) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/ingredients`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipe steps by recipeId
export const getRecipeSteps = async (recipeId) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/steps`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - All recipe comments by recipeId
export const getRecipeComments = async (recipeId) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/comments/all`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - Recipe comment by recipeId and commentId
export const getRecipeComment = async (recipeId, commentId) => {
    try {
        const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/comments/${commentId}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - All users
export const getAllUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/users/all`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// GET - User by userId
export const getUser = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8000/users/${userId}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

// - - - - - - - - - - - - - - - - - - - -
// - - - - - - - POST - -  - - - - - - - -
// - - - - - - - - - - - - - - - - - - - -

// POST - Recipe info
export const postRecipeInfo = (userId, name, description, time_h, time_m, price) => {
  return new Promise(function (resolve, reject) {
    axios
    .post("http://localhost:8000/recipes/new", {
      userId: userId,
      name: name,
      description: description,
      time_h: time_h,
      time_m: time_m,
      price: price,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// POST - Recipe categories
export const postRecipeCategories = (recipeId, categories) => {
  return new Promise(function (resolve, reject) {
    axios
    .post(`http://localhost:8000/recipes/${recipeId}/categories/new`, {
      categories: categories,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// POST - Recipe ingredients
export const postRecipeIngredients = (recipeId, ingredients) => {
  return new Promise(function (resolve, reject) {
    axios
    .post(`http://localhost:8000/recipes/${recipeId}/ingredients/new`, {
      ingredients: ingredients,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// POST - Recipe steps
export const postRecipeSteps = (recipeId, steps) => {
  return new Promise(function (resolve, reject) {
    axios
    .post(`http://localhost:8000/recipes/${recipeId}/steps/new`, {
      steps: steps,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// POST - Comment on a recipe
export const postRecipeComment = (recipeId, userId, comment, rating) => {
  return new Promise(function (resolve, reject) {
    axios
    .post(`http://localhost:8000/recipes/${recipeId}/categories/new`, {
      userId: userId,
      comment: comment,
      rating: rating,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// POST - User
export const postUser = (username, email, password) => {
  return new Promise(function (resolve, reject) {
    axios
    .post(`http://localhost:8000/users/new`, {
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - PUT - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - -

// PUT - Recipe info
export const putRecipeInfo = (recipeId, name, description, time_h, time_m, price) => {
  return new Promise(function (resolve, reject) {
    axios
    .put(`http://localhost:8000/recipes/${recipeId}/edit`, {
      name: name,
      description: description,
      time_h: time_h,
      time_m: time_m,
      price: price,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// PUT - Recipe categories
export const putRecipeCategories = (recipeId, categories) => {
  return new Promise(function (resolve, reject) {
    axios
    .put(`http://localhost:8000/recipes/${recipeId}/categories/edit`, {
      categories: categories,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// PUT - Recipe ingredients
export const putRecipeIngredients = (recipeId, ingredients) => {
  return new Promise(function (resolve, reject) {
    axios
    .put(`http://localhost:8000/recipes/${recipeId}/ingredients/edit`, {
      ingredients: ingredients,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// PUT - Recipe steps
export const putRecipeSteps = (recipeId, steps) => {
  return new Promise(function (resolve, reject) {
    axios
    .put(`http://localhost:8000/recipes/${recipeId}/steps/edit`, {
      steps: steps,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// PUT - Comment on recipe
export const putRecipeComment = (recipeId, commentId, comment, rating) => {
  return new Promise(function (resolve, reject) {
    axios
    .put(
      `http://localhost:8000/recipes/${recipeId}/comments/${commentId}/edit`,
      {
        comment: comment,
        rating: rating,
      }
    )
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// PUT - User
export const putUser = (userId, username, password) => {
  return new Promise(function (resolve, reject) {
    axios
    .put(`http://localhost:8000/users/${userId}/edit`, {
      username: username,
      password: password,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - -

// DELETE - Recipe
export const deleteRecipe = (recipeId) => {
  return new Promise(function (resolve, reject) {
    axios
    .delete(`http://localhost:8000/recipes/${recipeId}/delete`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// DELETE - Comment
export const deleteComment = (recipeId, commentId) => {
  return new Promise(function (resolve, reject) {
    axios
    .delete(
      `http://localhost:8000/recipes/${recipeId}/comments/${commentId}/delete`
    )
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

// DELETE - User
export const deleteUser = (userId) => {
  return new Promise(function (resolve, reject) {
    axios
    .delete(`http://localhost:8000/users/${userId}/delete`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error)
    });
  })
};

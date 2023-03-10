import React, { useState, useEffect, useRef } from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Spinner from "./spinner";
import { useAutoAnimate } from "@formkit/auto-animate/react";


function CreateRecipe() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState();
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState();
  const [wrongImageType, setWrongImageType] = useState(false);
  const [user, setUser] = useState(false);
  const [ingredientModal, setIngredientModal] = useState(false);
  const [instructionModal, setInstructionModal] = useState(false);
  const [newIngredient, setNewIngredient] = useState([]);
  const [newInstructions, setNewInstructions] = useState([]);

  const [parent, enableAnimations] = useAutoAnimate()


  let categories = [
    "Recommended",
    "Top-Picks",
    "Asian",
    "Poultry",
    "Meat",
    "Middle-East",
    "Quick",
    "Cheap",
    "Noodles",
    "Vegan",
    "Beef",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Dessert",
    "Savory",
    "Spicy",
    "Non-Spicy",
  ];

  const saveRecipe = async () => {
    const recipe = {
      selectedImages,
      title,
      category,
      ingredients,
      instructions,
    };
    localStorage.setItem("recipe", JSON.stringify(recipe));

    try {
      const response = await axios.post("http://localhost:8000/recipe", recipe);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // saves data on to webs local storage
    const savedRecipe = localStorage.getItem("recipe");
    if (savedRecipe) {
      const parsedRecipe = JSON.parse(savedRecipe);
      setSelectedImages(parsedRecipe.selectedImages);
      setTitle(parsedRecipe.title);
      setCategory(parsedRecipe.category);
      setIngredients(parsedRecipe.ingredients);
      setInstructions(parsedRecipe.instructions);
    }
  }, []);

  const uploadImage = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    console.log(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);
    console.log(selectedImages);
    // FOR BUG IN CHROME
    e.target.value = "";
  };

  const submitIngredient = (e) => {
    e.preventDefault();
    if (!newIngredient) return;
    setIngredients([...ingredients, { id: Date.now(), text: newIngredient }]);
    setNewIngredient("");
  };

  const submitInstruction = (e) => {
    e.preventDefault();
    if (!newInstructions) return;
    setInstructions([
      ...instructions,
      { id: Date.now(), text: newInstructions },
    ]);
    setNewInstructions("");
  };

  const deleteIngredient = (text) => {
    setIngredients(
      ingredients.filter((ingredients) => ingredients.text !== text)
    );
  };

  const deleteImage = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

  const categoryChange = (e) => {
    const { value } = e.target;
    setCategory((prevSelectedOptions) => [...prevSelectedOptions, value]);
  };

  const deleteCategory = (value) => {
    console.log(value);
    console.log(category.value);
    setCategory(category.filter((category) => category !== value));
  };

  const deleteInstruction = (id) => {
    setInstructions(
      instructions.filter((instructions) => instructions.id !== id)
    );
  };

  return (
    <div className="flex flex-col justify-center items-center lg:ml-20" >
      {fields && (
        <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in">
          Please add all fields.
        </p>
      )}
      <div className=" flex flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-3/5 w-full mt-12">
        <h2 className="text-4xl font-bold mb-4">Create a Recipe ???? </h2>
        <h4 className="text-lg italic mb-4">
          Share your wonderful recipe to world!
        </h4>
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
            {wrongImageType && (
              <p className="text-red-700">It&apos;s wrong file type.</p>
            )}
            <label className="cursor-pointer">
              <div className="flex flex-col items-center justify-center h-full ">
                <div className="flex flex-col justify-center items-center">
                  <ArrowUpOnSquareIcon className="text-black h-8 w-8" />
                  <p className="text-lg">Click to upload images.</p>
                </div>

                <p className="mt-32 text-gray-400">
                  Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or
                  TIFF less than 20MB
                </p>
              </div>
              <input
                type="file"
                name="upload-image"
                onChange={uploadImage}
                className="w-0 h-0"
                multiple
                accept="image/png , image/jpeg, image/webp, image/gif, image/tiff, image/jpg"
              />
            </label>
            <h2>Your Images</h2>
            {selectedImages &&
              selectedImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={"user images"}
                    onClick={() => deleteImage(image)}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your title"
            className="outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2"
          />
          {user && (
            <div className="flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg ">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p className="font-bold">{user.userName}</p>
            </div>
          )}
          <div>
            <p className="mb-2 font-semibold text:lg sm:text-xl">
              Choose Recipe Category
            </p>
            <div className="flex justify-between">
              <select
                className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                onChange={categoryChange} 
              >
                {categories.map((item) => (
                  <option 
                    className="text-base border-0 outline-none text-black cursor-pointer"
                    value={item}
                    key={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <ul ref={parent}>
              {category.map((item) => (
                <li key={item.id} onClick={() => deleteCategory(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex justify-between pr-4 items-center">
              <h2 className="font-bold text-2xl">Ingredients</h2>
              <PlusIcon
                className="h-8 w-8 lg:h-6 lg:w-6 mr-2 bg-black text-white rounded-lg"
                onClick={() => setIngredientModal(!ingredientModal)}
              />
            </div>
            {ingredientModal && (
              <div className="fixed z-5 top-0 left-0 w-full h-full bg-black bg-opacity-40">
                <div className="bg-white w-2/5 mx-auto mt-32 rounded-md border border-gray-300">
                  <span
                    className="text-gray-500 text-right text-2xl block cursor-pointer p-4"
                    onClick={() => setIngredientModal(!ingredientModal)}
                  >
                    ??
                  </span>
                  <div className="p-2 flex flex-col items-center justify-center">
                    <form onSubmit={(e) => submitIngredient(e)}>
                      <input
                        className="w-full mb-4 p-2"
                        type="text"
                        placeholder="Type ingredient and quantity here!"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                      />
                      <button
                        className="bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <div  ref={parent}>
              {ingredients &&
                ingredients.map((item) => (
                  <div> 
                    <li
                      className="cursor-pointer m-4"
                      key={item.id}
                      onClick={() => deleteIngredient(item.text)}
                    >
                      {item.text}
                    </li>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-between pr-4 items-center">
            <h2 className="font-bold text-2xl mb-2">Instructions</h2>
            <PlusIcon
              className="h-8 w-8 lg:h-6 lg:w-6 mr-2 bg-black text-white rounded-lg"
              onClick={() => setInstructionModal(!instructionModal)}
            />
          </div>
          {instructionModal && (
            <div className="fixed z-5 top-0 left-0 w-full h-full bg-black bg-opacity-40">
              <div className="bg-white w-4/5 mx-auto mt-32 rounded-md border border-gray-300">
                <span
                  className="text-gray-500 text-right text-2xl block cursor-pointer p-4"
                  onClick={() => setInstructionModal(!instructionModal)}
                >
                  ??
                </span>
                <div className="p-2 flex flex-col items-center justify-center">
                  <form onSubmit={(e) => submitInstruction(e)}>
                    <textarea
                      className="w-full mb-4 p-2"
                      type="text"
                      placeholder="List instructions here! List one instruction at a time!!"
                      value={newInstructions}
                      onChange={(e) => setNewInstructions(e.target.value)}
                    />
                    <button
                      className="bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
          <div ref={parent}>
            {instructions &&
              instructions.map((item) => (
                <ol
                  className="cursor-pointer"
                  key={item.id}
                  onClick={() => deleteInstruction(item.id)}
                >
                  <li className="m-4">{item.text}</li>
                </ol>
              ))}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                onClick={saveRecipe}
                className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
              >
                Save Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;

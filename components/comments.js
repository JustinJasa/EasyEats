import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CommentComponent from "./comment";
import axios from "axios";

const Comments = ({ toggleModal, token, session, id }) => {
  {
    /*
    TODO
  - Create post request for new comments into the database
  - Implement delete function after we inplement authentication
  */
  }

  const [commentInfo, setCommentInfo] = useState();
  const [newComment, setNewComment] = useState("");
  const [parent, enableAnimations] = useAutoAnimate();

  const userId = session.user.account[0].user_id;
  const username = session.user.account[0].username

  const getRecipeComments = async (recipeId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/recipes/${recipeId}/comments/all`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const postRecipeComment = async (recipeId, userId, comment, rating) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/recipes/${recipeId}/comments/new`,
        {
          userId: userId,
          comment: comment,
          rating: rating,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (e) => {
    try {
      e.preventDefault();
      await postRecipeComment(id, userId, newComment, 5);
      e.target.reset();
      const newResponse = await getRecipeComments(id);
      setCommentInfo(newResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    const response = await getRecipeComments(id);
    setCommentInfo(response);
  };

  useEffect(() => {
    fetchComments();
  }, [newComment]);

  // adding new comment to an array
  const addNewComment = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <>
      <aside className="h-full lg:w-1/3 w-full fixed top-0 right-0 bg-white shadow-black shadow-2xl child:m-4 overflow-scroll">
        <div className="flex w-full justify-between">
          <h2 className="font-bold text-2xl">Responses ✍️</h2>
          <XMarkIcon
            className="h-8 w-8 mr-6 cursor-pointer"
            onClick={toggleModal}
          />
        </div>
        <div>
          <div className="mt-2 mb-2 flex items-center">
            <h4 className="font-bold">Justin</h4>
            <img
              className="ml-2 h-6 w-6 rounded-full"
              src="https://picsum.photos/20/20"
              alt=""
            />
          </div>

          <form onSubmit={createComment}>
            <div className="flex">
              <input
                className="w-full p-2 mr-2 focus:outline-none rounded shadow-gray shadow-lg"
                placeholder="What are your thoughts?"
                onChange={addNewComment}
              />
              <button
                className="bg-black text-white font-bold p-2 rounded-xl"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div ref={parent}>
          {commentInfo &&
            commentInfo.map(({ comment, username, key }) => (
              <div index={key}>
                <CommentComponent comment={comment} username={username} />
              </div>
            ))}
        </div>
      </aside>
    </>
  );
};

export default Comments;

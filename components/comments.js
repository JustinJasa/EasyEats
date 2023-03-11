import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CommentComponent from "./comment";

const Comments = ({ toggleModal }) => {
  {
    /*
    TODO
  - Create post request for new comments into the database
  - Implement delete function after we inplement authentication
  */
  }

  const [comments, setComments] = useState([
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  ]);
  const [newComment, setNewComment] = useState("");
  const [parent, enableAnimations] = useAutoAnimate();

  // adding new comment to an array
  const addNewComment = (e) => {
    setNewComment(e.target.value);
  };

  const submitNewComment = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
    e.target.reset();
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

          <form onSubmit={submitNewComment}>
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
          {comments &&
            comments.map((comment) => (
              <div>
                <CommentComponent comment={comment} />
              </div>
            ))}
        </div>
      </aside>
    </>
  );
};

export default Comments;

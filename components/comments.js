import { useState } from "react";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Comments = ({ toggleModal, isShowing, setIsShowing }) => {

  console.log(isShowing)

  const comments = [
    "Great job!",
    "This is really helpful!",
    "I'm impressed!",
    "Thanks for sharing!",
    "You're a lifesaver!",
  ];

  return (
    <>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        show={isShowing}
      >
        <aside className="h-full lg:w-2/5 w-full fixed top-0 right-0 bg-white shadow-black shadow-2xl child:m-4 ">
          <div className="flex w-full justify-between">
            <h2 className="font-bold text-2xl">Responses</h2>
            <XMarkIcon
              className="h-8 w-8 mr-6 cursor-pointer"
              onClick={toggleModal}
            />
          </div>
          <div>
            <div className="mt-2 mb-2 flex">
              <h4 className="font-bold">Justin</h4>
              <img
                className="ml-2 rounded-md"
                src="https://picsum.photos/20/20"
                alt=""
              />
            </div>
            <input
              className="w-full p-2 focus:outline-none rounded"
              placeholder="What are your thoughts?"
            />
            <button></button>
          </div>

          {comments.map((comment) => (
            <div>
              <p>{comment}</p>
            </div>
          ))}
        </aside>
      </Transition>
    </>
  );
};

export default Comments;

import React from "react";

function CommentComponent({ comment, username }) {

  

  return (
    <>
      <hr />
      <div className="flex items-center mt-4">
      
      <p className="text-lg bg-gray-300 text-center p-2 rounded-full">{username.charAt(0)}</p>

        <div className="flex flex-col ml-2">
        <h4 className="font-bold">{username}</h4>
        <p className="italic text-slate-500 text-sm">6/2/2023</p>
        </div>
      </div>
      <p className="pt-4 pb-4 max-h-32 overflow-y-auto">{comment}</p>
    </>
  );
}

export default CommentComponent;

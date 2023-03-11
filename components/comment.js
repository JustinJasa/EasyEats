import React from "react";

function CommentComponent({ comment }) {
  return (
    <>
      <hr />
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full"
          src="https://picsum.photos/20/20"
          alt=""
        />
        <div className="flex flex-col ml-2">
        <h4 className="font-bold">Justin</h4>
        <p className="italic text-slate-500 text-sm">6/2/2023</p>
        </div>
      </div>
      <p className="pt-4 pb-4 max-h-32 overflow-y-auto">{comment}</p>
    </>
  );
}

export default CommentComponent;

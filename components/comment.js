import React from "react";

function CommentComponent({ comment, username, date, userId, session }) {

  return (
    <>
      <hr />
      <div className="flex items-center mt-4">
      
      <p className="text-lg bg-gray-300 text-center p-2 rounded-full">{username.charAt(0)}</p>

        <div className="flex flex-col ml-2">
        <h4 className="font-bold">{username}</h4>
        <p className="italic text-slate-500 text-sm">{ date ? date.slice(0, 10) : "Unable to get date"}</p>
        </div>
      </div>
      <p className="pt-4 pb-4 max-h-32 overflow-y-auto">{comment}</p>
      {
        userId === session.user.account[0].user_id 
          ? 
          <div className="flex items-center justify-between">
            <button className="text-lg p-1 cursor-pointer" onClick={() => console.log("Edit")}>✏️Edit</button>
            <button className="text-lg p-1 cursor-pointer" onClick={() => console.log("Delete")}>🗑️Delete</button>
          </div>
          : <></>
      }
    </>
  );
}

export default CommentComponent;

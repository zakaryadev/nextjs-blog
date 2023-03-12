import React, { useRef, useState, useEffect } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!name || !comment || !email) {
      setError(true);
      return;
    }

    const commentsObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentsObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="rounded-lg mb-8">
      <h3 className="text-xl text-slate-50 mb-8 font-semibold border-b pb-4">
        Comments
      </h3>
      <div className="grid grid-cols-1 gap-4 pb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 border border-slate-50 focus:ring-slate-200 bg-transparent text-slate-50"
          placeholder="Comments"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
        <input
          type="text"
          ref={nameEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 border border-slate-50 focus:ring-slate-200 bg-transparent text-slate-50"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 border border-slate-50 focus:ring-slate-200 bg-transparent text-slate-50"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 pb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            className="bg-slate-50 checked:bg-blue-100 w-4 h-4"
            ref={storeDataEl}
          />
          <label
            htmlFor="storeData"
            className="text-gray-50 cursor-pointer ml-2"
          >
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          onClick={handleCommentSubmission}
          type="button"
          className="transition duration-500 ease hover:bg-sky-900 inline-block bg-sky-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="font-semibold mt-2 text-slate-50 text-xl float-right">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;

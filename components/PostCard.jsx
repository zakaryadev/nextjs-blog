import moment from "moment/moment";
import Link from "next/link";
import React from "react";
import calendar from "../public/icon.svg";

const PostCard = ({ post }) => {
  return (
    <div className="rounded-lg mb-12">
      <h1 className="text-3xl transition duration-100 text-slate-50 mb-8 cursor-pointer hover:text-slate-400 hover:underline font-bold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex mb-8 w-full">
        <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-slate-200 ml-2 text-lg font-medium">
            {post.author.name}
          </p>
        </div>
        <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-slate-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="inline align-middle text-slate-200 ml-2 text-lg font-medium">
            {moment(post.createdAt).format("LL")}
          </span>
        </div>
      </div>
      <Link href={`/post/${post.slug}`}>
        <div className="relative overflow-hidden pb-80 mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-80 w-full object-cover rounded-t-lg lg:rounded-lg"
          />
        </div>
      </Link>
      <p className="text-left text-lg text-slate-200 font-normal">
        {post.excerpt}
      </p>
    </div>
  );
};

export default PostCard;

import React from "react";
import moment from "moment/moment";
import { getRecentPosts, getSimilarPosts } from "services";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = React.useState([]);
  React.useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res));
    }
  }, [slug]);

  return (
    <div>
      <h3 className="text-slate-100 text-xl mb-8 font-semibold border-b-2 pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items-start w-full mb-8" key={post.title}>
          <div className="flex-none">
            {/* <Link href={`/post/${post.slug}`}> */}
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="align-middle rounded-md object-cover h-14 w-24"
              />
            {/* </Link> */}
          </div>
          <div className="flex-grow ml-4 border-b">
            <Link
              href={`/post/${post.slug}`}
              className="transition duration-100 text-slate-100 mb-8 cursor-pointer hover:text-slate-400 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-slate-500 font-xs">
              {moment(post.createdAt).format("LLL")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

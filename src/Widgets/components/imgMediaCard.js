import React from "react";
import ReadMoreAndLess from "react-read-more-less";
import AddComment from "../../Components/addComment";
import "./styles/imgMediaCard.scss";
import BadgeAvatars from "../API_components/badgeAvatars";
import { LIMIT, READ_LESS, READ_MORE } from "./constants";
export default function ImgMediaCard(props) {
  const {
    posts,
    commentsList,
    anchorElComment,
    handleClickComment,
    handleCloseComment,
    postId,
  } = props;

  return (
    <div className='media-card'>
      {posts
        ? posts.map((post) =>
            post.visible ? (
              <div className="wrapper">
                <div className="item">
                  <div className="content">
                    <BadgeAvatars />
                    <div className="author">{post.author}</div>
                  </div>
                  <div className="content">
                      <ReadMoreAndLess
                        charLimit={LIMIT}
                        readMoreText={READ_MORE}
                        readLessText={READ_LESS}
                      >
                        {post.title}
                      </ReadMoreAndLess>
                  </div>
                  <div className="media">
                    <img src="" alt='img here' />
                  </div>
                  <div className="content">
                    <div className="title">
                      {posts.title}
                    </div>
                  </div>
                </div>
                <div className="item">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Share</button>
                </div>
                <div />

                <div className="content">
                  <div className="comment">
                    my comment
                  </div>
                </div>
              </div>
            ) : null
          )
        : null}
    </div>
  );
}

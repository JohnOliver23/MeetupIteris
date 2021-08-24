import React from "react";
import { IComment } from "../../utils/interfaces";
import CommentItem from "../CommentItem";
import styles from "./styles.module.scss";

type CommentProps = {
  comments: IComment[];
};
const CommentList = ({ comments }: CommentProps) => {
  return (
    <div className={styles.container}>
      <strong>Comentários: ({comments.length})</strong>

      <ul className={styles.commentList}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

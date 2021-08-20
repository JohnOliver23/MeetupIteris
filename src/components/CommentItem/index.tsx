import { IComment } from "../../utils/interfaces";
import styles from "./styles.module.scss";
type CommentProps = {
  comment: IComment;
};

const CommentItem = ({ comment }: CommentProps) => {
  return (
    <li className={styles.commentItem}>
      <div>
        <strong>{comment.name}</strong>
      </div>
      <p className={styles.description}>{comment.text}</p>
    </li>
  );
};

export default CommentItem;

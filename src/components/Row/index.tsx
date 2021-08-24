import React, { memo } from "react";
import { IRow } from "../../utils/interfaces";
import CommentList from "../CommentList";

const Row = ({ index, style, data }: IRow) => {
  return (
    <section className={style.containerInfos} key={data[index].id}>
      <strong>{data[index].formattedTitle}</strong>
      <p className={style.description}>{data[index].description}</p>

      <CommentList comments={data[index].comments} />
    </section>
  );
};

export default memo(Row);

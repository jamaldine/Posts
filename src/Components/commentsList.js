import React from "react";

import TableComponent from "../Widgets/components/tableComponent";
import TuileComponent from "../Widgets/components/tuileComponent";
export default function CommentsList(props) {
  const { active } = props;
  return active ? <TableComponent {...props} /> : <TuileComponent />;
}

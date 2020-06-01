import React from "react";
import MacGeneration from "../Widgets/components/macGeneration";
import ImgMediaCard from "../Widgets/components/imgMediaCard";
import TableComponent from "../Widgets/components/tableComponent";
import TuileComponent from "../Widgets/components/tuileComponent";
import "./styles/commentsList.css";
export default function CommentsList(props) {
  const { active } = props;
  return active ? <ImgMediaCard {...props} className="wrapper" /> : <TuileComponent className="wrapper" />;
}

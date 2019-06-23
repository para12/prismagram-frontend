import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, Comment_Full } from "./icons";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s linear;
  svg {
    fill: white;
  }
`;
const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 30px;
  }
`;
const NumberText = styled.div`
  margin-left: 10px;
  font-size: 16px;
`;

const PostCard = ({ likeCount, commentCount, file }) => (
  <Container bg={file.url}>
    <Overlay>
      <Number>
        <HeartFull />
        <NumberText>{likeCount}</NumberText>
      </Number>
      <Number>
        <Comment_Full />
        <NumberText>{commentCount}</NumberText>
      </Number>
    </Overlay>
  </Container>
);

PostCard.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default PostCard;

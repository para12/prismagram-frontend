import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_FOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { toast } from "react-toastify";

const FollowButtonContainer = ({ isFollowing, id }) => {
  const followMutation = useMutation(TOGGLE_FOLLOW, { variables: { id } });
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const onClick = () => {
    try {
      followMutation();
    } catch {
      toast.error("can't toogle follow");
    }
    setIsFollowing(!isFollowingS);
  };
  return <FollowButtonPresenter isFollowing={isFollowingS} onClick={onClick} />;
};

FollowButtonContainer.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default FollowButtonContainer;

import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import PostCard from "../../Components/PostCard";

const Wrapper = styled.div`
  /* height: 50vh; */
`;

const Section = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-auto-rows: 160px;
  grid-template-rows: 160px;
  margin-bottom: 50px;
`;
const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-auto-rows: 200px;
  grid-template-rows: 200px;
`;

const searchPresenter = ({ term, loading, data }) => {
  if (!term) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  }
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
  if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text="No users found." />
          ) : (
            data.searchUser.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                username={user.username}
                isFollowing={user.isFollowing}
                url={user.avatar}
                isSelf={user.isSelf}
              />
            ))
          )}
        </Section>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text="No posts found." />
          ) : (
            data.searchPost.map(post => (
              <PostCard
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))
          )}
        </PostSection>
      </Wrapper>
    );
  }
};

searchPresenter.propTypes = {
  searchTerm: propTypes.string
};

export default searchPresenter;

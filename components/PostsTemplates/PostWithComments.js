import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  align-items: start;
  display: flex;
`;
const Media = styled.div`
  margin-right: 16px;
  width: 200px;
`;
const Title = styled.h2`
  padding: 1rem;
  font-famaly: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.underRed};
`;
const Body = styled.div`
  background-color: ${(props) => props.theme.colors.ocean};
  border-radius: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors.postBlack};
`;
const Comments = styled.div`
  flex: 1;
  overflow: auto;
  height: calc(100vh - 4rem);
`;
const Comment = styled.div`
  padding: 1rem;
`;

export default function PostWithComments({ post, comments }) {
  return (
    <Container>
      <Media>
        <Title>
          {post.title} : {post.id}
        </Title>
        <Body>{post.body}</Body>
      </Media>
      <Comments>
        {comments.map((comment, i) => (
          <Comment key={i}>
            <Title>
              {comment.id} : {comment.email}
            </Title>
            <Body>{comment.body}</Body>
          </Comment>
        ))}
      </Comments>
    </Container>
  );
}

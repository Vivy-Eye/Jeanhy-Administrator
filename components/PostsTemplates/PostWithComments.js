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
  color: ${(props) => props.theme.colors.underRed};
  font-famaly: ${(props) => props.theme.fonts.title};
  padding: 1rem;
`;
const Body = styled.div`
  background-color: ${(props) => props.theme.colors.ocean};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.postBlack};
  padding: 1rem;
`;
const Comments = styled.div`
  flex: 1;
  height: calc(100vh - 4rem);
  overflow: auto;
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

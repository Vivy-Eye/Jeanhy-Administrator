import styled from "styled-components";
import Link from "next/link";

const PostsCardContainer = styled.div`
  column-count: 3;
  column-gap: 1rem;
  width: 100%;
`;
const PostCard = styled.div`
  break-inside: avoid;
  margin-bottom: 1rem;
  padding: 1rem;
`;
const Title = styled.h2`
  padding: 1rem;
  color: ${(props) => props.theme.colors.underRed};
`;
const Body = styled.div`
  background-color: ${(props) => props.theme.colors.ocean};
  border-radius: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors.postBlack};
`;
const Comments = styled.div`
color: ${(props) => props.theme.colors.orange};
`;

export default function PostsCard({ posts }) {
  return (
    <PostsCardContainer>
      {posts.map((post, i) => (
        <PostCard key={i}>
          <Title>{post.title}</Title>
          <Body>{post.body}
          <Comments>
            <Link href={`posts/${post.id}`}>
              <a>View Comments</a>
            </Link>
          </Comments>
          </Body>
        </PostCard>
      ))}
    </PostsCardContainer>
  );
}

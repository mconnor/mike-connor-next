import Link from 'next/link'
import styled from 'styled-components'



const MainDiv = styled.div`
color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  background: blue;
    a {
        text-decoration: none;
        margin-right: 15px;
        color: white;
    }
`;
export default function Header() {
  return (
    <MainDiv>
        <h1>Mike Connor</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </MainDiv>
  )
}

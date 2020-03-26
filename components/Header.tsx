import Link from 'next/link'
import styled from 'styled-components'



const MainDiv = styled.div`
    height: 80px;
  padding: 0  2px 0 2px;
  background: blue;
    a {
        text-decoration: none;
        margin-right: 15px;
        color: white;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.div`
    font-size: .75rem;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
`;
export default function Header() {
    return (
        <MainDiv>
            <Title>Mike Connor</Title>
            <Nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                <Link href="/batman">
                    <a>Batman</a>
                </Link>
                <Link href="/quotes">
                    <a>Quotes</a>
                </Link>
            </Nav>
        </MainDiv>
    )
}

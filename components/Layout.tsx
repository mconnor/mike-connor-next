import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components'

const LayoutDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 20;
  border: 1px solid #DDD;
  height: 95vh;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const Container = styled.div`
    margin: 0  20px 0 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Layout: React.FunctionComponent = ({ children }) => (
    <LayoutDiv>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </LayoutDiv>
);

export default Layout;

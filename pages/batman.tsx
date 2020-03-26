import { NextPage } from 'next'
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';


type ShowType = {
    id: string,
    name: string
}

type Props = {
    shows: Array<ShowType>;
}

type ScoreShowType = {
    score: number,
    show: ShowType
}

const MainDiv = styled.div`

width: max-content;
`;

const Batman: NextPage<Props> = ({ shows }) => (
    <Layout>
        <MainDiv>
            <h1>Batman TV Shows</h1>
            <ul>
                {shows.map(show => (
                    <li key={show.id}>
                        <Link href="/p/[id]" as={`/p/${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainDiv>

    </Layout>
);




//https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
// If you're using Next.js 9.3 or newer, we recommend that
//  you use getStaticProps or getServerSideProps instead of getInitialProps.

Batman.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data: Array<ScoreShowType> = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Batman;

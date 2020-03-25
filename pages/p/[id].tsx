import { NextPage } from 'next'
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

type ShowType = {
    id: string,
    name: string,
    image?: {
        medium: string,
        original: string
    },
    summary: string
}

type Props = {
    show: ShowType
}

const Post: NextPage<Props> = ({ show }) => (
    <Layout>
        <h1>{show.name}</h1>
        <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {show.image ? <img src={show.image.medium} /> : null}
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;

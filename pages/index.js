import { Layout } from '../components/MyLayout'
import withLayout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const PostLink2 = ({post}) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            ul{padding:0}
            li{list-style:none;
                margin:5px 0;}
            a{
                text-decoration:none;
                color:blue;
            }
            a:hover{
                opacity:0.6;
            }
        `}</style>
    </li>
)

function Index() {
    return (
        <div>
            <Layout>
                <p>Hello Next.js</p>
            </Layout>
        </div>
    )
}

const Page = () => <p>Hello Next.js</p>

function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello Next.js" />
                <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    )
}

const Index2 = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index2.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(`Show data fetched. Count:${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

function getPosts() {
    return [
        { id:"hello-nextjs", title:"Hello Next.js" },
        { id:"learn-nextjs", title:"Learn Next.js is awesome" },
        { id:"deploy-nextjs", title:"Deploy apps with Zeit" }
    ]
}

function Blog2() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <li key={post.id}>
                        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
            h1,
            a{font-family:'Arial';}
            ul{padding:0}
            li{list-style:none;
                margin:5px 0;}
            a{
                text-decoration:none;
                color:blue;
            }
            a:hover{
                opacity:0.6;
            }
            `}</style>
        </Layout>
    )
}

function Blog3() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink2 key={post.id} post={post}/>
                ))}
            </ul>
            <style jsx>{`
            h1,
            a{font-family:'Arial';}
            ul{padding:0}
            li{list-style:none;
                margin:5px 0;}
            a{
                text-decoration:none;
                color:blue;
            }
            a:hover{
                opacity:0.6;
            }
            `}</style>
        </Layout>
    )
}

export default Blog3
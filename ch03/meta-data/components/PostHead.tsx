import Head from 'next/head'

function PostMeta(props){
    return (
        <Head>
            <title> {props.title}</title>
            <meta name={"description"} content={props.subtitle} />
            {/* 오픈 그래프 메타데이터 */}
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.subtle} />
            <meta property='og:image' content={props.image} />

            {/* 트위터 카드 메타데이터 */}
            <meta property='twitter:card' content="summary" />
            <meta property='twitter:title' content={props.title} />
            <meta property='twitter:description' content={props.subtle} />
            <meta property='twitter:image' content={props.image} />

        </Head>
    )
}

export default PostMeta;
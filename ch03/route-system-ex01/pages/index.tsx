import Link from "next/link";

function Homepage(){
    return (
      <>
        <div>This is the homepage</div>
        <Link href='/blog/2023-01-01/happy-new-year'>Read post</Link><p />
        <Link href='/blog/2023-03-05/match-update'>Read post</Link><p />
        <Link href='/blog/2023-04-23/i-love-nextjs'>Read post</Link><p/>
          <Link
              href={{
                  pathname: '/blog/[date]/[slug]',
                  query: {
                      date: '2024-01-01',
                      slug: 'happy-new-year',
                      foo: 'bar'
                  }
              }}
          >
              Read post
          </Link>
      </>
      );
}

export default Homepage;
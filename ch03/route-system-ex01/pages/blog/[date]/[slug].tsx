import {useRouter} from 'next/router'

function Slug(){
    const {query} = useRouter();

    return <div>{query.date} , {query.slug} , {query.foo}</div>
}

export default Slug;
import Image from "next/image";

const loader = ({src, width, quality}) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
function IndexPage(){
    return (
        <Image
            loader={loader}
            src='/sample.png'
            alt='A beautiful English Setter'
            width={350}
            height={540}
            />
    )
}

export default IndexPage;
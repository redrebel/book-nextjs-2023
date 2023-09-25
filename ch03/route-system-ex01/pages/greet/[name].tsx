export async function getServerSideProps({params}: any) {
    const {name} = params;
    return {
        props: {
            name,
        },
    };
}

function Greet(props : any){
    return (
        <h1> Hello, {props.name}! </h1>
    )
}

export default Greet;
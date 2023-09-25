import Image from "next/image";
function IndexPage(){
    return (
        <div>

        <img
            src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
            alt='A beautiful English Setter'
            width='500'
        />

        <Image
            src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
            width={500}
            height={200}
            alt='A beautiful English Setter'
            />

        </div>
    )
}

export default IndexPage;
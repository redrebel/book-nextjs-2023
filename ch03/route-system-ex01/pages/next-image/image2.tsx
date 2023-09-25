import Image from "next/image";
function IndexPage(){
    return (
        <div>

        <img
            src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
            alt='A beautiful English Setter'
            width='500'
        />
            <div
                style={{
                    width: 500,
                    //height: 200,
                    position: 'relative'
                }}>
        <Image
            src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
            layout='fill'
            objectFit='cover'
            alt='A beautiful English Setter'
            />

                <Image
                    src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
                    layout='fixed'
                    width={600}
                    height={200}
                    objectFit='cover'
                    alt='A beautiful English Setter'
                />

                <Image
                    src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
                    layout='responsive'
                    width={600}
                    height={200}
                    objectFit='cover'
                    alt='A beautiful English Setter'
                />
            </div>
        </div>
    )
}

export default IndexPage;
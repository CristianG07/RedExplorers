import { data } from "react-router-dom";
import { arrow_down, car_beach, desert, philippines, women } from "../assets/images";
import Button from "../components/ui/Button";
import CardPrimary from "../components/ui/CardPrimary";

export default function Home() {
    const cardInfo = {
        date: "July, 15, 2021 - Tips and Tricks",
        mediaType: "image",
        image: desert,
        alt: "desert image",
        title: `A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore`,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
        location: "Penang, Malaysia",
        comment: 52
    }

    const cardBeach = {
        date: "July, 15, 2021 - Tips and Tricks",
        mediaType: "image",
        image: car_beach,
        alt: "desert image",
        title: "Have you read The Beach by Alex?",
        text: "",
        location: "Penang, Malaysia",
        comment: 52
    }
    const cardPhilippines = {
        date: "July, 15, 2021 - Tips and Tricks",
        mediaType: "image",
        image: philippines,
        alt: "desert image",
        title: "The writer actually live in Philippines",
        text: "",
        location: "Penang, Malaysia",
        comment: 52
    }

    const cardNaturalWild = {
        date: "July, 15, 2021 - Tips and Tricks",
        mediaType: "video",
        video: 'https://www.youtube.com/embed/htqd5aGB7FY?si=MygwV7OpN6G0-dib',
        alt: "video natural wild",
        title: "Finding Love & home in Tbilisi, Georgia",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
        location: "Penang, Malaysia",
        comment: 52
    }

    return (
        <>
            <main>
                <section className="text-white bg-[url('./assets/images/hero_image.png')] bg-no-repeat bg-center bg-cover h-screen">
                    <div className="h-full flex flex-col justify-end items-center gap-10 text-center pb-3">
                        <p className="text-3xl font-bold">THE COUNTER: <span className="text-secondary">70</span> Countries <span className="text-secondary">1036</span> Cities </p>
                        <h1 className="text-6xl font-extrabold leading-20">Leave your mark on all <br /> over the world  </h1>
                        <Button className="px-12 py-6">Read More</Button>
                        <div className="grid place-items-center gap-4">
                            <p className="text-2xl">Scroll Down to Continue</p>
                            <div>
                                <img src={arrow_down} alt="arrow down" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-11/12 m-auto py-20 bg-cyan-200">
                    <div className="flex gap-16">
                        <aside className="flex-1">
                            <div className="card px-10 py-6 text-pretty">
                                <h3 className="text-4xl text-center font-bold mb-4">About Me</h3>
                                <div className="grid gap-2">
                                    <img src={women} alt="Women image" />
                                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.</p>
                                </div>
                                <div className="text-center mt-5">
                                    <Button className="px-10 py-5 text-white text-xl">Read More</Button>
                                </div>
                            </div>
                        </aside>
                        <div className="grid gap-10 flex-2">
                            <CardPrimary cardInfo={cardInfo} />
                            <div className="grid grid-cols-2 gap-5">
                                <CardPrimary cardInfo={cardBeach} />
                                <CardPrimary cardInfo={cardPhilippines} />
                            </div>
                            <CardPrimary cardInfo={cardNaturalWild} />
                            <div className="h-96 bg-[url('./assets/images/purchase.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center px-2">
                                <div className="max-w-2xl h-full flex flex-col items-center justify-between pt-5 pb-14">
                                    <h3 className="text-4xl leading-12 font-bold">Want <span className="text-secondary underline underline-offset-8">Me to Purchase</span> Something For You That isn’t available in your Country?</h3>
                                    <Button className="px-10 py-5">Place Order</Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <CardPrimary cardInfo={cardBeach} />
                                <CardPrimary cardInfo={cardPhilippines} />
                                <CardPrimary cardInfo={cardBeach} />
                                <CardPrimary cardInfo={cardPhilippines} />
                            </div>
                            <CardPrimary cardInfo={cardNaturalWild} />
                            <div className="grid grid-cols-2 gap-5">
                                <CardPrimary cardInfo={cardBeach} />
                                <CardPrimary cardInfo={cardPhilippines} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
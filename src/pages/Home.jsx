import { data } from "react-router-dom";
import { arrow_down, women } from "../assets/images";
import Button from "../components/ui/Button";
import CardPrimary from "../components/ui/CardPrimary";
import SimpleCard from "../components/ui/SimpleCard";
import { cardBeach, cardInfo, cardNaturalWild, cardPhilippines, categoriesList, productPost, recentPost, socialInfo } from "../data/Data";
import AsideSwiper from "../components/ui/AsideSwiper";
import RecentPost from "../components/ui/RecentPost";
import ProductPost from "../components/ui/ProductPost";
import SocialCard from "../components/ui/SocialCard";

export default function Home() {

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
                <section className="w-11/12 m-auto py-20">
                    <div className="grid grid-cols-8 gap-16">
                        <aside className="flex flex-col col-span-3 gap-10">
                            <div className="card px-10 py-6 text-pretty">
                                <h3 className="titleCard">About Me</h3>
                                <div className="grid gap-2">
                                    <img src={women} alt="Women image" />
                                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.</p>
                                </div>
                                <div className="text-center mt-5">
                                    <Button className="px-10 py-5 text-white text-xl">Read More</Button>
                                </div>
                            </div>

                            <div className="card px-10 py-6 text-pretty">
                                <h3 className="titleCard">Categories</h3>
                                <div className="flex flex-col gap-7 py-10">
                                    {categoriesList.map((categorie) => (
                                        <div className="flex justify-between items-center text-2xl" key={categorie.text}>
                                            <p>{categorie.text}</p>
                                            <span>{`(${categorie.comments})`}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <SimpleCard>Popular Post</SimpleCard>
                            <AsideSwiper />
                            <SimpleCard>Recent Post</SimpleCard>
                            <RecentPost postInfo={recentPost} />
                            <div className="card px-10 py-6 space-y-6">
                                <div className="space-y-8">
                                    <h3 className="titleCard">Gear I Use</h3>
                                    <h3 className="titleCard">What’s in My Bag??</h3>
                                </div>
                                <div className="grid gap-2 text-center">
                                    <p className="text-xl leading-9 font-light">Unfortunately, there is no <br /> “one-size-fits-all” when it comes <br /> to travel packing lists.</p>
                                </div>
                                <div className="text-center mt-5">
                                    <Button className="px-10 py-5 text-white text-xl">View Details</Button>
                                </div>
                            </div>
                            <SimpleCard>Product That I Have</SimpleCard>
                            <ProductPost postInfo={productPost} />
                            <SimpleCard>Get In Touch</SimpleCard>
                            <SocialCard socialInfo={socialInfo} />
                        </aside>
                        <div className="grid gap-10 col-span-5">
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
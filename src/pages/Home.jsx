import { arrow_down } from "../assets/images";
import Button from "../components/layout/Button";

export default function Home() {
    return (
        <>
            <main>
                <section className="text-white bg-[url('../src/assets/images/hero_image.png')] bg-center bg-cover h-screen">
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
            </main>
        </>
    )
}
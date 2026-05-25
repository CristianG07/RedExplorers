import { arrow_down, women } from "../assets/images";
import Button from "../components/layout/Button";

export default function Home() {
    return (
        <>
            <main>
                <section className="text-white bg-[url('../src/assets/images/hero_image.png')] bg-no-repeat bg-center bg-cover h-screen">
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
                <section className="container m-auto py-20">
                    <div>
                        <aside>
                            <div className="card">
                                <h3 className="text-4xl text-center font-bold mb-4">About Me</h3>
                                <div className="grid gap-2">
                                    <img src={women} alt="Women image" />
                                    <p className="text-balance text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.</p>
                                </div>
                                <div className="text-center mt-5">
                                    <Button className="px-10 py-5 text-white text-xl">Read More</Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    )
}
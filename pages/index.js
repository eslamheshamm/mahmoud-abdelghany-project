import React, { useRef, useEffect } from "react";
import Head from "next/head";
import ShapesSection from "../src/components/landingpage/shapes-section";
import Form from "../src/components/form";
import FollowMeSection from "../src/components/landingpage/followme-section";
import smoothScroll from "../src/components/smoothScrolling";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import helloAnimation from "../hello-animation.json";
export default function Home() {
	const parent = useRef(null);
	useEffect(() => {
		smoothScroll(parent.current);
	}, [parent]);
	const myRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		let anim = lottie.loadAnimation({
			container: myRef.current.querySelector(".anim"),
			animationData: helloAnimation,
			renderer: "svg",
			loop: false,
			autoplay: false,
		});
		let timeObj = { currentFrame: 0 };
		let duration = anim.getDuration();
		ScrollTrigger.create({
			trigger: myRef.current.querySelector(".pinContaine"),
			pin: true,
			scrub: 1,
			start: "top top",
			end: "+=2000",
			onUpdate: (self) => {
				gsap.to(timeObj, {
					duration: duration,
					currentFrame: Math.floor(self.progress * (anim.totalFrames - 1)),
					ease: "power4.out",
					onUpdate: () => {
						anim.goToAndStop(timeObj.currentFrame, true);
					},
				});
			},
			onLeave: () => {
				console.log("hi");
			},
		});
	}, []);
	return (
		<div ref={parent} className=" overflow-x-hidden">
			<Head>
				<title>Hello Animation!</title>
			</Head>
			<section className="min-h-screen">
				<div className="h-[25vh] flex justify-center items-start">
					<div className="pt-9">
						<svg
							width="64"
							height="40"
							viewBox="0 0 64 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="64" height="40" fill="#E5E5E5" />
							<rect
								width="1440"
								height="5173"
								transform="translate(-688 -60)"
								fill="white"
							/>
							<path
								d="M64.0001 26.4011V39.203H51.1982C47.6653 39.203 44.4636 37.7726 42.1451 35.4541C39.8315 33.1357 38.3962 29.9388 38.3962 26.4011H51.1982V13.5992C58.2687 13.5992 64.0001 19.3305 64.0001 26.4011Z"
								fill="black"
							/>
							<path
								d="M51.1982 0.796997V13.5989C47.6653 13.5989 44.4636 15.0293 42.1499 17.3478C39.8315 19.6615 38.401 22.8631 38.401 26.396H25.5991C25.5991 12.2597 37.0618 0.796997 51.1982 0.796997Z"
								fill="black"
							/>
							<path
								d="M25.599 26.4008C25.599 29.9337 24.1686 33.1354 21.8501 35.4538C19.5365 37.7675 16.3348 39.2027 12.8019 39.2027C5.73134 39.2027 0 33.4714 0 26.4008H25.599Z"
								fill="black"
							/>
						</svg>
					</div>
				</div>
				<div ref={myRef}>
					<h2 className="text-center text-2xl uppercase font-NeueLight opacity-50 flex flex-col items-center justify-center">
						scroll down
						<span className="mt-4">
							<svg
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.49985 0.199925L4.99985 3.69993L1.49985 0.199925L0.0998535 0.899926L4.99985 5.79993L9.89985 0.899926L8.49985 0.199925Z"
									fill="black"
								/>
							</svg>
						</span>
					</h2>
					<div className="pinContaine w-full h-full">
						<div className="anim h-[300px] w-[300px] sm:w-[500px] sm:h-[500px] m-auto"></div>
					</div>
				</div>
			</section>
			<div className="h-[10vh]"></div>
			<ShapesSection />
			<Form />
			<FollowMeSection />
		</div>
	);
}

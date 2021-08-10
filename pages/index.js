import React, { useRef, useEffect, useState } from "react";
import helloAnimation from "../hello-animation.json";
import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import smoothScroll from "../src/components/smoothScrolling";
import Head from "next/head";
import FormInputs from "../src/components/form";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import lottie from "lottie-web";
export default function Home() {
	gsap.registerPlugin(ScrollTrigger);
	// smoothScroll(parent.current);
	const parent = useRef(null);
	const myRef = useRef(null);
	const secDiv = useRef(null);
	const firstShape = useRef(null);
	const secodShape = useRef(null);
	const thirdShape = useRef(null);
	useEffect(() => {
		// gsap.from(firstShape.current, {
		// 	x: "-500px",
		// 	scrollTrigger: {
		// 		trigger: secDiv.current,
		// 		start: "top center-=300",
		// 		toggleActions: "play none none reverse",
		// 		scrub: true,
		// 	},
		// });
		// gsap.from(thirdShape.current, {
		// 	x: "500",
		// 	scrollTrigger: {
		// 		trigger: secDiv.current,
		// 		start: "top center-=300",
		// 		toggleActions: "play none none reverse",
		// 		scrub: true,
		// 	},
		// });
	}, [firstShape, secodShape, thirdShape, secDiv]);
	useEffect(() => {
		smoothScroll(parent.current);
	}, [parent]);
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
			scrub: true,
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
		<div ref={parent}>
			<Head>
				<title>Hello Animation!</title>
			</Head>
			<section className="min-h-screen">
				<div className="h-[150px]"></div>
				<div ref={myRef} className="">
					<h2 className="text-center uppercase font-bold">scroll down!</h2>
					<div className="pinContaine w-full h-full">
						<div className="anim h-[300px] w-[300px] sm:w-[500px] sm:h-[500px] m-auto"></div>
					</div>
				</div>
			</section>
			<section className=" h-[50vh] relative" ref={secDiv}>
				<h2 className=" text-center text-white font-NeueBold text-xl sm:text-4xl lg:text-7xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full">
					We take pride in exploring what <br /> Arabic letters are cabable of
				</h2>
				<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
					<article className="grid grid-cols-[1fr,0.5fr,1fr] grid-shapes">
						<div ref={firstShape}>
							<svg
								width="582"
								height="598"
								viewBox="0 0 582 598"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="   w-full h-full place-self-center justify-self-center  transform scale-x-110"
							>
								<path
									d="M582 598H-8C-8 267.993 256.407 6.10352e-05 582 6.10352e-05V598Z"
									fill="#E94F38"
								/>
							</svg>
						</div>
						<div ref={secodShape}>
							<svg
								width="324"
								height="598"
								viewBox="0 0 324 598"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="place-self-center w-full h-full justify-self-center transform scale-y-[1.06]"
							>
								<path
									d="M1.66581 276.358C-11.0361 440.684 112.553 584.48 277.444 597.225L323.477 1.68267C158.587 -11.0629 14.3677 112.032 1.66581 276.358Z"
									fill="#E94F38"
								/>
							</svg>
						</div>
						<div ref={thirdShape}>
							<svg
								width="574"
								height="582"
								viewBox="0 0 574 582"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="relative  w-full h-full place-self-center justify-self-center  transform scale-x-110"
							>
								<path
									d="M287 0C445.382 0 574 130.411 574 291V582H287C128.619 582 0 451.589 0 291C0 130.411 128.619 0 287 0Z"
									fill="#E94F38"
								/>
							</svg>
						</div>
					</article>
				</div>
			</section>
			<section className="min-h-screen relative">
				<article className="flex flex-col justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
					<h1 className="font-NeueBold font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
						We’re still building this website!
					</h1>
					<h2 className="font-NeueThin text-3xl sm:text-4xl md:text-5xl mb-12">
						Be the first to hear about new fonts.
					</h2>
					<div className=" w-10/12 md:w-8/12">
						<FormInputs />
					</div>
				</article>{" "}
			</section>
			<section className="h-[50vh]">
				<ul className="text-2xl sm:text-4xl md:text-5xl font-NeueBold flex items-center justify-center flex-col ">
					<li className="mb-12">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Behance
						</a>
					</li>
					<li className="mb-12">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}

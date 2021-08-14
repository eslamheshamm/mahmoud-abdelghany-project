import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

import Form from "../src/components/form";
import smoothScroll from "../src/components/smoothScrolling";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import helloAnimation from "../hello-animation.json";
export default function Home() {
	gsap.registerPlugin(ScrollTrigger);
	const parent = useRef(null);
	const myRef = useRef(null);
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
			id: "hello",
			// markers: true,
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
	const behanceRef = useRef(null);
	const instaRef = useRef(null);
	const facebookRef = useRef(null);
	const followMeRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.fromTo(
			instaRef.current,
			{
				y: "100%",
			},
			{
				duration: 3,
				y: "25%",
				scrollTrigger: {
					id: "instagram",
					trigger: followMeRef.current,
					start: "top center",
					end: "+=15%",
					toggleActions: "play none none reverse",
					scrub: 1,
					// markers: true,
				},
			}
		);
		gsap.fromTo(
			facebookRef.current,
			{
				y: "100%",
			},
			{
				duration: 3,
				y: "50%",
				scrollTrigger: {
					id: "facebook",
					trigger: followMeRef.current,
					start: "top center",
					end: "+=15%",
					toggleActions: "play none none reverse",
					scrub: 1,
					// markers: true,
				},
			}
		);
		gsap.fromTo(
			behanceRef.current,
			{
				y: "100%",
			},
			{
				duration: 3,
				y: "0%",
				scrollTrigger: {
					id: "behance",
					// markers: true,
					trigger: followMeRef.current,
					start: "top center",
					end: "+=15%",
					toggleActions: "play none none reverse",
					scrub: 1,
				},
			}
		);
	}, [followMeRef, behanceRef, instaRef, facebookRef]);
	// shapes
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const secDiv = useRef(null);
	const firstShape = useRef(null);
	const secodShape = useRef(null);
	const thirdShape = useRef(null);
	const mobileShape = useRef(null);
	useEffect(() => {
		{
			isMobile &&
				gsap.fromTo(
					mobileShape.current,
					{
						y: "100%",
					},
					{
						duration: 3,
						y: "0%",
						scrollTrigger: {
							id: "shape-mobile",
							trigger: secDiv.current,
							start: "top center",
							end: "+=10%",
							toggleActions: "play none none reverse",
							scrub: 1,
							// markers: true,
						},
					}
				);
		}
		{
			!isMobile &&
				gsap.fromTo(
					thirdShape.current,
					{
						x: "110%",
					},
					{
						duration: 3,
						x: "0%",
						scrollTrigger: {
							id: "shape-3",
							trigger: secDiv.current,
							start: "top center",
							end: "+=25%",
							toggleActions: "play none none reverse",
							scrub: 1,
							// markers: true,
						},
					}
				);
		}
		{
			!isMobile &&
				gsap.fromTo(
					firstShape.current,
					{
						x: "-110%",
					},
					{
						duration: 3,
						x: "0%",
						scrollTrigger: {
							id: "shape-1",
							trigger: secDiv.current,
							start: "top center",
							end: "+=25%",
							toggleActions: "play none none reverse",
							scrub: 1,
							// markers: true,
						},
					}
				);
		}
		{
			!isMobile &&
				gsap.fromTo(
					secodShape.current,
					{
						scale: "0",
					},
					{
						duration: 3,
						scale: "1",
						scrollTrigger: {
							id: "shape-2",
							trigger: secDiv.current,
							start: "top center",
							end: "+=25%",
							toggleActions: "play none none reverse",
							scrub: 1,
							// markers: true,
						},
					}
				);
		}
	}, [isMobile, firstShape, secodShape, thirdShape, secDiv]);

	return (
		<div ref={parent} className=" overflow-x-hidden">
			<Head>
				<title>Hello Animation!</title>
			</Head>
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
			<section className=" h-[2300px] sm:h-[2500px]">
				<div ref={myRef}>
					<div className="pinContaine ">
						<div className="anim h-[300px] w-[300px] sm:w-[500px] sm:h-[500px] mx-auto"></div>
					</div>
				</div>
			</section>
			{/* <ShapesSection /> */}
			<section className="min-h-screen relative " ref={secDiv}>
				<h2 className=" text-center text-white leading-relaxed font-NeueBold text-4xl  sm:text-4xl lg:text-5xl xl:text-7xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-11/12 mx-auto">
					We take pride in exploring what <br /> Arabic letters are cabable of
				</h2>
				<div className="absolute mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
					<article className="grid md:grid-cols-[1fr,0.5fr,1fr] md:grid-shapes">
						<div ref={firstShape} className="hidden md:block">
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
						<div ref={secodShape} className=" hidden md:block">
							<svg
								width="324"
								height="598"
								viewBox="0 0 324 598"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="place-self-center w-full h-full justify-self-center transform scale-y-[1.06] "
							>
								<path
									d="M1.66581 276.358C-11.0361 440.684 112.553 584.48 277.444 597.225L323.477 1.68267C158.587 -11.0629 14.3677 112.032 1.66581 276.358Z"
									fill="#E94F38"
								/>
							</svg>
						</div>
						<div ref={thirdShape} className=" hidden md:block">
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
						<div
							ref={mobileShape}
							className=" transform md:hidden md:transform-none rotate-90 scale-150 md:rotate-0 md:scale-0"
						>
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
			<Form />
			{/* <FollowMeSection /> */}
			<section className="min-h-screen overflow-hidden" ref={followMeRef}>
				<h2 className="uppercase font-NeueLight text-2xl text-center  py-16">
					FOLLOW ME
				</h2>
				<ul className="text-sm sm:text-3xl md:text-4xl font-NeueBold  grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6 w-11/12 mx-auto">
					<li
						className="mb-12 border-2 rounded-br-[60px] md:rounded-br-[200px] flex justify-center items-center h-[140px]  md:h-[400px] border-black hover:bg-black hover:border-0 hover:text-white"
						ref={behanceRef}
					>
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							// className="w-full"
						>
							Behance
						</a>
					</li>
					<li
						className="mb-12 border-2 rounded-tr-[60px] md:rounded-tr-[200px] flex justify-center items-center h-[140px]  md:h-[400px] border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:border-0 hover:text-white"
						ref={instaRef}
					>
						{" "}
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</li>
					<li
						className="mb-12 border-2 rounded-bl-[60px] md:rounded-bl-[200px] flex justify-center items-center h-[140px]  md:h-[400px] border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:border-0 hover:text-white"
						ref={facebookRef}
					>
						{" "}
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

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ShapesSection = () => {
	gsap.registerPlugin(ScrollTrigger);
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
							end: "10%",
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
							markers: true,
						},
					}
				);
		}
	}, [isMobile]);

	return (
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
	);
};
export default ShapesSection;

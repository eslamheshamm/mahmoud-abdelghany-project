import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FollowMeSection = () => {
	const behanceRef = useRef(null);
	const instaRef = useRef(null);
	const facebookRef = useRef(null);
	const followMeRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		console.log(followMeRef.current, "f");
		gsap.fromTo(
			instaRef.current,
			{
				y: "100%",
			},
			{
				duration: 3,
				y: "25%",
				ease: "power4.out",
				scrollTrigger: {
					trigger: followMeRef.current,
					start: "top center",
					end: " +=75%",
					toggleActions: "play none none reverse",
					scrub: 1,
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
				y: "75%",
				ease: "power4.out",
				scrub: true,
				scrollTrigger: {
					trigger: followMeRef.current,
					start: "top center",
					end: " +=75%",
					toggleActions: "play none none reverse",
					scrub: 1,
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
				ease: "power4.out",
				scrub: true,
				scrollTrigger: {
					trigger: followMeRef.current,
					start: "top center",
					end: " +=100%",
					toggleActions: "play none none reverse",
					scrub: 1,
				},
				markers: true,
			}
		);
	}, [behanceRef, instaRef, facebookRef, followMeRef]);

	return (
		<section className="min-h-screen pb-20">
			<div ref={followMeRef} className="border min-h-screen">
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
			</div>
		</section>
	);
};
export default FollowMeSection;

import { SVGProps, memo } from "react";

const Timer = memo((props: SVGProps<SVGSVGElement>) => {
	console.log("rendering icon");
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 40"
			width="80"
			height="80"
			{...props}
		>
			<path fill="#4e7ab5" d="m28.3 10.7 4-4 3 3-4 4zM16 4h7v4h-7z" />
			<path
				fill="#8bb7f0"
				d="M16 4.5a.5.5 0 0 1-.5-.5V1c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-7z"
			/>
			<path
				fill="#4e7ab5"
				d="M23 1v3h-7V1h7m0-1h-7a1 1 0 0 0-1 1v3c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z"
			/>
			<path
				fill="#8bb7f0"
				d="m34.3 11.5-.3-.1-3.4-3.5a.3.3 0 0 1 0-.4l2-2H32.8L36.4 9v.5l-2 1.9h-.1z"
			/>
			<path
				fill="#4e7ab5"
				d="M32.7 6 36 9.4l-1.6 1.6L31 7.7l1.6-1.6m0-1.1c-.2 0-.4 0-.5.2l-2 2c-.3.3-.3.8 0 1.1l3.5 3.5a.8.8 0 0 0 1.1 0l2-2c.3-.3.3-.8 0-1.1l-3.5-3.5a.8.8 0 0 0-.6-.2z"
			/>
			<path fill="#8bb7f0" d="M19.5 39.5a16 16 0 1 1 0-32 16 16 0 0 1 0 32z" />
			<path
				fill="#4e7ab5"
				d="M19.5 8a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31m0-1a16.5 16.5 0 1 0 0 33 16.5 16.5 0 0 0 0-33z"
			/>
			<path fill="#f2faff" d="M19.5 36.5a13 13 0 1 1 0-26 13 13 0 0 1 0 26z" />
			<path
				fill="#4e7ab5"
				d="M19.5 11a12.5 12.5 0 1 1 0 25 12.5 12.5 0 0 1 0-25m0-1a13.5 13.5 0 1 0 0 27 13.5 13.5 0 0 0 0-27z"
			/>
			<path
				fill="none"
				stroke="#66798f"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="m14 18 5.5 5.5"
			/>
			<path
				fill="#66798f"
				d="M19.5 22a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3zm.5-11h-1v2h1v-2zm-1 25h1v-2h-1v2zM7 24h2v-1H7v1zm23 0h2v-1h-2v1zm-16.2-9.3.9-.5-1-1.8-.9.5 1 1.8zm11.4 17.6-.9.5 1 1.8.9-.5-1-1.8zm-16.8-3 .5.9 1.8-1-.5-.9-1.8 1zm22.2-11.6-.5-.9-1.8 1 .5.9 1.8-1zm-20.4 1 .5-.9-1.8-1-.5.9 1.8 1zm18.6 9.6-.5.9 1.8 1 .5-.9-1.8-1zm-16 5.8.9.5 1-1.8-.9-.5-1 1.8zm12.5-21.7-1 1.8.9.5 1-1.8-.9-.5z"
			/>
		</svg>
	);
});

export default Timer;

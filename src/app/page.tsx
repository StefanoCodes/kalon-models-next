import Link from "next/link";
import Heading from "./about/_components/heading";

export default function Home() {
	return (
		<main className="py-10 px-5 w-full md:px-10">
			<section id="home" className="container">
				<div className="flex flex-col gap-4">
					<Heading headingSize="h1">
						Home
					</Heading>
					<div className="flex items-center gap-4">
						<Link href={'/about'}>About</Link>
						<Link href={'/register'}>Register</Link>
					</div>
				</div>
			</section>
		</main >
	)
}

import Button from "./components/atoms/Button";
import { HomeHeroActions } from "./components/molecules/HomeHeroActions";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
			<h1 className="text-4xl font-bold">Ecommerce Profissional</h1>
			<HomeHeroActions />
		</main>
	);
}

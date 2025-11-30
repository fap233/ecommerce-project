import Button from "./components/atoms/Button";

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center p-24 gap-4">
			<h1 className="text-4xl font-bold text-blue-600">Ecommerce HomePage</h1>
			<p className="text-gray-500">Mainpage placeholder</p>

			<div className="flex gap-4">
				<button className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
					Botão html puro
				</button>
			</div>
		</div>
	);
}

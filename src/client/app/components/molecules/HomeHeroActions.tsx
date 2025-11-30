"use client";

import Button from "../atoms/Button";

export const HomeHeroActions = () => {
	const handleClick = () => {
		console.log("Rodando o cliente");
		alert("funcionou");
	};

	return (
		<div className="flex gap-4">
			<Button
				onClick={handleClick}
				className="bg-blue-600 text-white cursor-pointer"
			>
				Entrar no Sistema
			</Button>
			<Button className="bg-gray-200 text-gray-800 cursor-pointer">
				Saiba Mais
			</Button>
		</div>
	);
};

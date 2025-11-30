export default function ProductDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<div className="container mx-auto py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Área da imagem */}
				<div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-gray-500">
					[ProductGallery Organism]
				</div>

				{/* Detalhes */}
				<div className="space-y-4">
					<h1 className="text-3xl font-bold">Produto:</h1>
					<p className="text-3xl font-bold">R$ 9,99</p>
					<p className="text-xl font-semibold text-green-600">
						Descrição detalhada do produto
					</p>
					<button className="w-full bg-black text-white py-3 rounded mt-4 hover: bg-gray-800 transition cursor-pointer">
						Adicionar ao Carrinho
					</button>
				</div>
			</div>
		</div>
	);
}

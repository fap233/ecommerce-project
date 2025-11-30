export default function ProductDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<div className="container mx-auto py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Área da imagem */}
				<div className="">[ProductGallery Organism]</div>

				{/* Detalhes */}
				<div className="">
					<h1 className="text-3xl font-bold">Produto:</h1>
					<p>R$ 9,99</p>
					<p>Descrição detalhada do produto</p>
					<button>Adicionar ao Carrinho</button>
				</div>
			</div>
		</div>
	);
}

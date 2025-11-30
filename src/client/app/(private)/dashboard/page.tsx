export default function DashboardPage() {
	return (
		<div className="flex h-screen">
			{/* sidebar */}
			<aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
				<div className="font-bold text-xl mb-8">Admin Painel</div>
				<ul className="space-y-4 opacity-70">
					<li>Visão geral</li>
					<li>Produtos</li>
					<li>Pedidos</li>
				</ul>
			</aside>

			<main className="flex-1 p-8 bg-gray-50">
				<h1 className="text-2xl font-bold mb-6">Dashboard</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="bg-white p-6 rounded shadow-sm">
						Vendas hoje: R$ 0,00
					</div>
					<div className="bg-white p-6 rounded shadow-sm">Pedidos: 0</div>
					<div className="bg-white p-6 rounded shadow-sm">Clientes: 0</div>
				</div>
			</main>
		</div>
	);
}

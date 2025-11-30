export default function DashboardPage() {
	return (
		<div>
			{/* sidebar */}
			<aside>
				<div>Admin Painel</div>
				<ul>
					<li>Visão geral</li>
					<li>Produtos</li>
					<li>Pedidos</li>
				</ul>
			</aside>

			<main>
				<h1>Dashboard</h1>
				<div>
					<div>Vendas hoje: R$ 0,00</div>
					<div>Pedidos: 0</div>
					<div>Clientes: 0</div>
				</div>
			</main>
		</div>
	);
}

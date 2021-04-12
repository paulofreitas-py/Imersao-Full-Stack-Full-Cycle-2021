import { useEffect, useState } from 'react'
import './App.css'
import { Card, Typography } from 'antd'
import 'antd/dist/antd.css'

type Route = {
	title: String
	startPosition: { lat: String; long: String }
	endPosition: { lat: String; long: String }
}

function App() {
	const [routes, setRoutes] = useState<Route[]>([])
	const { Title } = Typography

	useEffect(() => {
		fetch('http://localhost:3000/routes')
			.then((res) => res.json())
			.then((res) => {
				setRoutes(res)
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<div className="App">
			<br />
			<br />
			<br />
			<header className="App-header">
				{routes.map((v, k) => {
					return (
						<Card
							key={k}
							title={
								<>
									<Title level={5} style={{ fontWeight: 'bold' }}>
										Route title:
									</Title>{' '}
									{v.title}
								</>
							}
							bordered={false}
							style={{
								width: '50%',
								marginBottom: '2vh',
							}}
						>
							<Card
								title={
									<Title level={5} style={{ fontWeight: 'bold' }}>
										Start position:
									</Title>
								}
								hoverable
								style={{
									width: '100%',
									textAlign: 'center',
								}}
							>
								Latitude {v.startPosition.lat} - Longitude {v.endPosition.long}
							</Card>
							<br />
							<Card
								title={
									<Title level={5} style={{ fontWeight: 'bold' }}>
										End position:
									</Title>
								}
								hoverable
								style={{
									width: '100%',
									textAlign: 'center',
								}}
							>
								Latitude {v.endPosition.lat} - Logitude {v.endPosition.long}
							</Card>
						</Card>
					)
				})}
			</header>
		</div>
	)
}

export default App

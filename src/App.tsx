import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Table from './Components/Table'
import { getParticipants } from './services/mockService'
import { Participant } from './types'

function App():React.ReactElement {

	const [participants, setParticipants] = useState<Participant[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const data = getParticipants()
		if (data.length > 0) {
			setParticipants(data)
			setLoading(false)
		}		
	}, [])

	return (
		<div className="App">
			<Header />
			<div className="container">
				<section role="main">
					<h1>List of participants</h1>
					{!loading && <Table participants={participants} />}
				</section>
			</div>
		</div>
	)
}

export default App

import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Table from './Components/Table'
import { getParticipants } from './services/mockService'
import { generateID } from './utils/utils'
import { Participant } from './types'

function App():React.ReactElement {

	const [participants, setParticipants] = useState<Participant[]>([])
	const [selectedParticipant, setSelectedParticipant] = useState<Participant>()
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const data = getParticipants()
		if (data.length > 0) {
			setParticipants(data)
			setLoading(false)
		}		
	}, [])

	const handleSubmit = (participant:Participant) => {
		if (selectedParticipant) {
			setParticipants(participants.map(p => p.id === participant.id ? participant : p))
			setSelectedParticipant(undefined)
			return
		}
		const participantToAdd = {
			id: generateID(),
			...participant
		}
		setParticipants(participants.concat(participantToAdd))
	}

	const handleRemove = (participant:Participant) => {
		setParticipants(participants.filter(p => p.id !== participant.id))
	}

	const handleSelect = (participant:Participant|undefined) => {
		setSelectedParticipant(participant)
	}

	return (
		<div className="App">
			<Header />
			<div className="container">
				<section role="main">
					<h1>List of participants</h1>					
					{!loading && 
						<Table 
							participants={participants} 
							selectedParticipant={selectedParticipant} 
							handleSelect={handleSelect}
							handleRemove={handleRemove}
							handleSubmit={handleSubmit}
						/>}
				</section>
			</div>
		</div>
	)
}

export default App

import React from 'react'
import { Participant } from '../types'
import EditForm from './EditForm'

interface Props {
	participants: Participant[]
	selectedParticipant: Participant|undefined
	handleSelect: (value:Participant) => void
	handleRemove: (value:Participant) => void
	handleSubmit: (values:Participant) => void
}

const Table = ({ 
	participants, 
	selectedParticipant,
	handleSelect,
	handleRemove,
	handleSubmit 
}:Props):React.ReactElement => {
	return (
		<div className="table-container">
			<div className="table">
				<EditForm handleSubmit={handleSubmit} selectedParticipant={undefined} />
			</div>
			<div className="table">
				<div className="table-header-group">
					<div className="table-row">
						<div className="table-cell">Name</div>
						<div className="table-cell">E-mail address</div>
						<div className="table-cell">Phone number</div>
						<div className="table-cell">Add new</div>
					</div>
				</div>
				<div className="table-row-group">
					{participants.map(participant => {
						if (selectedParticipant && selectedParticipant.id === participant.id) {
							return (
								<EditForm key={participant.id} selectedParticipant={selectedParticipant} handleSubmit={handleSubmit} />
							)
						} else {
							return (
								<div className="table-row" key={participant.id}>
									<div className="table-cell">{participant.name}</div>
									<div className="table-cell">{participant.email}</div>
									<div className="table-cell">{participant.phone}</div>
									<div className="table-cell">
										<button onClick={() => handleSelect(participant)}>Edit</button>
										<button onClick={() => handleRemove(participant)}>Remove</button>
									</div>
								</div>
							)
						}
					})}
					
				</div>
			</div>
		</div>
	)
}

export default Table
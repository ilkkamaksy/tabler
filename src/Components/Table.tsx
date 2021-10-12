import React from 'react'
import { Participant } from '../types'
import EditForm from './EditForm'
import { useSortableData } from '../hooks/SortableData'

interface Props {
	participants: Participant[]
	selectedParticipant: Participant|undefined
	handleSelect: (value:Participant|undefined) => void
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

	const { sortedParticipants, reSort, sortConfig } = useSortableData({ participants, config: { key: 'name',  direction: 'ascending' }})

	console.log(sortConfig)

	return (
		<div className="table-container">
			<div className="table">
				<EditForm 
					handleSubmit={handleSubmit} 
					selectedParticipant={undefined} 
					handleSelect={handleSelect} 
				/>
			</div>
			<div className="table">
				<div className="table-header-group">
					<div className="table-row">
						<div className="table-cell" onClick={() => reSort('name')}>Name</div>
						<div className="table-cell" onClick={() => reSort('email')}>E-mail address</div>
						<div className="table-cell" onClick={() => reSort('phone')}>Phone number</div>
						<div className="table-cell">Add new</div>
					</div>
				</div>
				<div className="table-row-group">
					{sortedParticipants.map(participant => {
						if (selectedParticipant && selectedParticipant.id === participant.id) {
							return (
								<EditForm 
									key={participant.id} 
									selectedParticipant={selectedParticipant} 
									handleSubmit={handleSubmit} 
									handleSelect={handleSelect}
								/>
							)
						} else {
							return (
								<div className="table-row" key={participant.id}>
									<div className="table-cell" onClick={() => handleSelect(participant)}>{participant.name}</div>
									<div className="table-cell" onClick={() => handleSelect(participant)}>{participant.email}</div>
									<div className="table-cell" onClick={() => handleSelect(participant)}>{participant.phone}</div>
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
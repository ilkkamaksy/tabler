import React from 'react'
import { Participant } from '../types'
import EditForm from './EditForm'
import { useSortableData } from '../hooks/SortableData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

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
			<div className="table data-table">
				<div className="table-header-group">
					<div className="table-row">
						<div 
							className={`table-cell table-cell--header-cell ${sortConfig && sortConfig.key === 'name' ? 'sorted' : ''}`} 
							onClick={() => reSort('name')}>
								Name
							{sortConfig && sortConfig.key === 'name' && sortConfig.direction === 'ascending' 
								? <FontAwesomeIcon icon={faArrowUp} /> 
								: sortConfig && sortConfig.key === 'name' ? <FontAwesomeIcon icon={faArrowDown} /> : null}
						</div>
						<div 
							className={`table-cell table-cell--header-cell ${sortConfig && sortConfig.key === 'email' ? 'sorted' : ''}`} 
							onClick={() => reSort('email')}>
								E-mail address
							{sortConfig && sortConfig.key === 'email' && sortConfig.direction === 'ascending' 
								? <FontAwesomeIcon icon={faArrowUp} /> 
								: sortConfig && sortConfig.key === 'email' ? <FontAwesomeIcon icon={faArrowDown} /> : null}
						</div>
						<div 
							className={`table-cell table-cell--header-cell ${sortConfig && sortConfig.key === 'phone' ? 'sorted' : ''}`} 
							onClick={() => reSort('phone')}>
								Phone number
							{sortConfig && sortConfig.key === 'phone' && sortConfig.direction === 'ascending' 
								? <FontAwesomeIcon icon={faArrowUp} /> 
								: sortConfig && sortConfig.key === 'phone' ? <FontAwesomeIcon icon={faArrowDown} /> : null}
						</div>
						<div className="table-cell table-cell--header-cell table-cell-end"></div>
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
									<div className="table-cell table-cell--data-cell" onClick={() => handleSelect(participant)}>{participant.name}</div>
									<div className="table-cell table-cell--data-cell" onClick={() => handleSelect(participant)}>{participant.email}</div>
									<div className="table-cell table-cell--data-cell" onClick={() => handleSelect(participant)}>{participant.phone}</div>
									<div className="table-cell table-cell--data-cell table-cell-end">
										<button className="icon-btn" onClick={() => handleSelect(participant)}>
											<FontAwesomeIcon icon={faPen} />
										</button>
										<button className="icon-btn" onClick={() => handleRemove(participant)}>
											<FontAwesomeIcon icon={faTrash} />
										</button>
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
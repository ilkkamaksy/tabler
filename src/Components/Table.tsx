import React from 'react'
import { Participant } from '../types'

interface Props {
	participants: Participant[]
}

const Table = ({ participants }:Props):React.ReactElement => {
	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>Full Name</th>
						<th>E-mail address</th>
						<th>Phone number</th>
						<th>Add new</th>
					</tr>
				</thead>
				<tbody>
					{participants.map(participant => {
						return (
							<tr key={participant.id}>
								<td>{participant.name}</td>
								<td>{participant.email}</td>
								<td>{participant.phone}</td>
								<td>tools</td>
							</tr>
						)
					})}
					
				</tbody>
			</table>
		</div>
	)
}

export default Table
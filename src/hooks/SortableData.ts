// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useMemo } from 'react'
import { Participant } from '../types'

type Config = {
	config: null | {
		key: string
		direction: string
	}
}

type Items = {
	participants: Participant[]
}

type Args = Config & Items

type ReturnType = {
	sortedParticipants: Participant[]
	reSort: (key:string) => void
	sortConfig: null | {
		key: string
		direction: string
	}
}

export const useSortableData = ({participants, config = null }: Args):ReturnType => {
	
	const [sortConfig, setSortConfig] = useState(config)
    
	const key = sortConfig !== null && sortConfig.key === 'email' ? 'email' : sortConfig !== null && sortConfig.key === 'phone' ? 'phone' : 'name'

	const sortedData = useMemo(() => {
		const items = [...participants]
		if (sortConfig !== null) {
			participants.sort((a, b) => {
				if (a[key] < b[key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1
				}
				if (a[key] > b[key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1
				}
				return 0
			})
		}
		return items
	}, [participants, sortConfig])
  
	const reSort = (key:string) => {
		const direction = sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
		setSortConfig({ key, direction })
	}
  
	return { sortedParticipants: sortedData, reSort, sortConfig }
}
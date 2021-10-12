import { participants } from '../mockData/mockData'
import { Participant } from '../types'

export const getParticipants = ():Participant[] => {
	return participants
}
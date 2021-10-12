import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Participant } from '../types'

interface Props {
	selectedParticipant: Participant|undefined
	handleSubmit: (values:Participant) => void
}

const EditForm = ({ selectedParticipant, handleSubmit }:Props):React.ReactElement => {
	
	const formik = useFormik({
		initialValues: selectedParticipant ? selectedParticipant : {
			name: '',
			email: '',
			phone: ''
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, 'Name is too Short')
				.required('Required'),
			email: Yup.string()
				.email('Invalid email')
				.required('Required'), 
			phone: Yup.string()
				.min(5, 'Invalid phone number')
				.matches(/^\d+$/, 'Numbers only')
				.required('Required'),
		}),
		onSubmit: values => {
			handleSubmit(values)
		}
	})

	return (
		<form className="table-row" onSubmit={formik.handleSubmit}>
			<input
				id="id"
				name="id"
				type="hidden"
				value={formik.values.id}
			/>
			<div className="table-cell">
				<input
					id="name"
					name="name"
					type="text"
					placeholder="Full name"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				{ formik.errors.name && <div className="form-errors">{formik.errors.name}</div> }
			</div>
			<div className="table-cell">
				<input
					id="email"
					name="email"
					type="text"
					placeholder="E-mail address"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{ formik.errors.email && <div className="form-errors">{formik.errors.email}</div> }
			</div>
			<div className="table-cell">
				<input
					id="phone"
					name="phone"
					type="text"
					placeholder="Phone number"
					onChange={formik.handleChange}
					value={formik.values.phone}
				/>
				{ formik.errors.phone && <div className="form-errors">{formik.errors.phone}</div> }
			</div>
			<div className="table-cell">
				{!selectedParticipant ? 
					<button className="submit-btn" type="submit">Add new</button>
					: <div>
						<button className="cancel-btn" type="submit">Cancel</button>
						<button className="submit-btn" type="submit">Save</button>
					</div>}
				
			</div>
		</form>
	)
}

export default EditForm
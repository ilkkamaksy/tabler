import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Participant } from '../types'

interface Props {
	participant: Participant|undefined
	handleSubmit: (values:Participant) => void
}

const EditForm = ({ participant, handleSubmit }:Props):React.ReactElement => {
	
	const [initialValues, setInitialValues] = useState<Participant>({
		name: '',
		email: '',
		phone: ''
	})

	useEffect(() => {
		if (participant) {
			setInitialValues(participant)
		}
	}, [])

	const formik = useFormik({
		initialValues,
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
		<form onSubmit={formik.handleSubmit}>
			<div className="form-col form-col--start">
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
			<div className="form-col">
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
			<div className="form-col form-col--end">
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
			<div>
				<button className="submit-url" type="submit">Add new</button>
			</div>
		</form>
	)
}

export default EditForm
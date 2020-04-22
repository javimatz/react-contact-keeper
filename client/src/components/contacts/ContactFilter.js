import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {

	const contactContext = useContext(ContactContext);
	const { filtered, filterContacts, clearFilter } = contactContext;

	const text = useRef('');

	useEffect( () => {
		if (filtered === null) {
			text.current.value = '';
		} 
	});

	const onChange = (e) => {
		if (e.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}

	}

	return (
		<Form>
			<input ref={text} type='text' placeholder='Filter Contacts...' onChange={onChange} />
		</Form>
	)
}

export default ContactFilter;
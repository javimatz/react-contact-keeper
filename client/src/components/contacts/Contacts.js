import React, { Fragment, useContext, useEffect } from 'react';
// import { CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {

	const contactContext = useContext(ContactContext);

	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect( () => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>Please add a contact</h4>
	}

	return (
		<Fragment>
			{contacts !== null && !loading ? (
				<div>
					{
						(filtered !== null)?
							filtered.map( contact => (
								<div key={contact._id} className='item' >
									<ContactItem contact={contact} />
								</div>
						)) :
							contacts.map( contact => (
								<div key={contact._id} className='item' >
									<ContactItem contact={contact} />
								</div>
							))
					}
				</div>
			) : <Spinner />} 

			
		</Fragment>
	)
}

export default Contacts;
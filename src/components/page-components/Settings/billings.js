import {useState} from 'react';
import {BillingDetails} from './screens/billingDetails';
import {BankDetails} from './screens/bankDetails';

export const Billings = () => {
	const [editScreen, setEditScreen] = useState(false);

	const handleEdit = () => {
		setEditScreen(editScreen ? false : true);
	};
	return <>{editScreen ? <BankDetails handleEdit={handleEdit} /> : <BillingDetails handleEdit={handleEdit} />}</>;
};

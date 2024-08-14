export const BaseURL_ONE = 'https://gigconnect-be-d57a61e22de9.herokuapp.com/api/v1';

export const isTokenValid = typeof window !== 'undefined' && localStorage.getItem('devToken') !== 'undefined' && JSON.parse(localStorage.getItem('devToken'));

export const getLocalStorageInfo = (arg) => {
	typeof window !== 'undefined' && localStorage.getItem(arg) !== 'undefined' && JSON.parse(localStorage.getItem(arg));
};

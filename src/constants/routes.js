export const BaseURL_ONE = 'https://gigconnect-be-c0b0c654cc36.herokuapp.com/api/v1';

export const isTokenValid = typeof window !== 'undefined' && localStorage.getItem('devToken') !== 'undefined' && JSON.parse(localStorage.getItem('devToken'));

export const getLocalStorageInfo = (arg) => {
	typeof window !== 'undefined' && localStorage.getItem(arg) !== 'undefined' && JSON.parse(localStorage.getItem(arg));
};

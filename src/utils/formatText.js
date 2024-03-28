export const truncateLongText = (txt, lens) => {
	const length = lens ?? 17;

	return {
		truncatedText: txt?.length <= length ? txt : txt?.slice(0, length) + '...',
		originalText: txt,
		isTruncated: txt?.length > length,
	};
};

export const capitalizeTextFormat = (str) => {
	return str?.charAt(0).toUpperCase() + str?.toLowerCase().slice(1);
};

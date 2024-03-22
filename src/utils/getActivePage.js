
export const getActivePage = (arg, getPath) => {
	// Match the last part of the URL after the last forward slash or colon
	const pageUrl = getPath?.match(/[/|:](\w+)[^/|:]*$/);
	return arg.text?.toLowerCase() === pageUrl?.[1];
};

import dynamic from 'next/dynamic';
import {useEffect, useRef, useState} from 'react';
import {LuSend} from 'react-icons/lu';
const QuillEditor = dynamic(() => import('react-quill'), {ssr: false});

const TextEditor = ({placeholder, addMessage}) => {
	const [content, setContent] = useState('');
	const quillRef = useRef();
	useEffect(() => {
		if (quillRef.current) {
			const quill = quillRef.current.getEditor();
			const toolbar = quill.getModule('toolbar');
			console.log(quill.getText());
			toolbar.addHandler('luSend', function () {
				console.log('LuSend button was clicked!');
				// Add your logic here
			});
		}
	}, []);

	const isDisabled = content == '';

	const sendMessage = () => {
		if (isDisabled) {
			return;
		}
		addMessage(content);
		setContent('');
	};

	return (
		<div className='text-editor'>
			<div id='toolbar'>
				<button className='ql-bold'></button>
				<button className='ql-italic'></button>
				<button className='ql-underline'></button>
				<button className='ql-strike'></button>
			</div>
			<QuillEditor
				placeholder={placeholder}
				ref={quillRef}
				modules={{toolbar: '#toolbar'}}
				onChange={(content, delta, source, editor) => {
					setContent(content);
				}}
				value={content}
			/>
			<LuSend
				style={{
					padding: '.25rem',
					background: isDisabled ? '#6060607a' : '#053AF9',
					borderRadius: '100%',
					alignSelf: 'end',
					marginRight: '1rem',
					position: 'absolute',
					marginBottom: '3rem',
				}}
				color='#FFF'
				className='ql-luSend'
				size={30}
				cursor={isDisabled ? 'not-allowed' : 'pointer'}
				onClick={sendMessage}
			/>
		</div>
	);
};

export default TextEditor;

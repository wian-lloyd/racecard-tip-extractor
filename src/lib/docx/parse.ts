import mammoth from 'mammoth';
import * as docx from 'docx';

export const extractRawText = async (inDocxFilePath: string) => {
	const { messages, value } = await mammoth.extractRawText({ path: inDocxFilePath });
	console.log({ messages, value });
};

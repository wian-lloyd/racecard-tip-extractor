import fs from 'fs/promises';
import cliSelect from 'cli-select';
import prompt from 'prompt';

import { asciiTitle } from './ascii';
import { IN_DIR_PATH } from './constants';

interface InPdfFilePath {
	filePath: string;
	fileName: string;
}

interface CliSessionOut {
	inPdfFilePaths: InPdfFilePath[];
}

const readDir = async (): Promise<InPdfFilePath[]> => {
	const { PWD, INIT_CWD } = process.env;
	const { multiSelect, startDir } = await prompt.get([
		{ description: 'Read multiple files?(Y/n)', name: 'multiSelect' },
		{ description: `Specify PDF file directory(default is "${PWD ? PWD : INIT_CWD + '/' + IN_DIR_PATH}")`, name: 'startDir' },
	]);

	let pdfsDir = `${startDir.toString()}/`;
	if (pdfsDir === '/') {
		pdfsDir = IN_DIR_PATH;
	}

	const multipleFiles: boolean = multiSelect.toString().toLowerCase() === '';

	const inDir = await fs.readdir(pdfsDir);
	const inDirPdf = inDir.filter((dir) => dir.includes('.pdf')); // TODO: Rename to file type e.g. schedule.

	if (!inDirPdf.length) {
		throw new Error(`No .pdf files found in directory ${pdfsDir}`);
	}

	const selectedPdfs: string[] = [];
	if (multipleFiles) {
		const allValue = '[x ALL x]';
		const exitValue = '[x COMPLETE SELECTION x]';
		let exit = false;

		while (!exit) {
			const remainingOptions = inDirPdf.filter((listedPdf) => {
				return !selectedPdfs.includes(listedPdf);
			});

			const values = [...remainingOptions, exitValue];
			if (inDirPdf.length === remainingOptions.length) {
				values.unshift(allValue);
			}
			const { value } = await cliSelect({
				values,
			});

			if (value === allValue) {
				exit = true;
				selectedPdfs.push(...inDirPdf);
				continue;
			}

			if (value === exitValue) {
				exit = true;
				continue;
			}

			selectedPdfs.push(value);
		}
	} else {
		selectedPdfs.push((await cliSelect({ values: inDirPdf })).value);
	}

	const inPdfFilePaths = selectedPdfs.map((pdfName) => {
		return {
			filePath: pdfsDir + pdfName,
			fileName: pdfName,
		};
	});

	return inPdfFilePaths;
};

export const cliSession = async (): Promise<CliSessionOut> => {
	console.log(asciiTitle);

	prompt.message = '';
	prompt.start();

	let inPdfFilePaths: InPdfFilePath[] = [];
	try {
		inPdfFilePaths = await readDir();
	} catch (err) {
		if (err) {
			if ((err as Error).message !== 'canceled') {
				console.error((err as Error).message);
				await readDir();
			}
		}
	}

	return {
		inPdfFilePaths,
	};
};

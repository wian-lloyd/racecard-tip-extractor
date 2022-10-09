import prompt from 'prompt';

import { cliSession } from './cli';
import { parseFileItems, extractRaces } from './parse';

async function main() {
	try {
		const {
			inPdfFilePaths,
			// inDocxFilePath,
		} = await cliSession();

		let i = 0;
		for (const { fileName, filePath } of inPdfFilePaths) {
			i++;
			console.log('\n', fileName.toUpperCase());

			const fileItems = await parseFileItems(filePath);
			const races = extractRaces(fileItems);

			if (!races.length) {
				throw new Error('Unexpected file content.');
			}

			console.table(races);
			console.log(`(${i} of ${inPdfFilePaths.length})`);

			if (i !== inPdfFilePaths.length) {
				await prompt.get([{ description: 'Continue? Press enter', name: '' }]);
			}
		}
	} catch (err) {
		const error = err as Error;
		if (error?.message) {
			console.error('\n', error.message);
		}
	}
}

main().catch((err) => {
	console.error(err);
});

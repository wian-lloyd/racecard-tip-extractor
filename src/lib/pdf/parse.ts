import { PdfReader } from 'pdfreader';

export const parseFileItems = async (inPdfFilePath: string): Promise<any[]> => {
	return new Promise((res, rej) => {
		const fileItems: any[] = [];
		new PdfReader().parseFileItems(inPdfFilePath, (err: any, item: any) => {
			if (err) rej(err);
			else if (!item) res(fileItems);
			else if (item) fileItems.push(item);
		});
	});
};

interface DefaultRace {
	number: null | number;
	name: null | string;
	time: null | string;
	tips?: null | string;
}

const hollyWoodBetsAlgo = (fileItems: any[]) => {
	const races = [];

	const defaultRace: DefaultRace = {
		number: null,
		name: null,
		time: null,
		tips: null,
	};

	let race = defaultRace;

	for (const [index, { text }] of fileItems.entries()) {
		if (text) {
			if (text === 'RACE') {
				race = {
					number: Number(fileItems[index + 1].text),
					time: fileItems[index + 3].text,
					name: `${text} ${fileItems[index + 1].text}`,
				};
			} else if (text.includes('TIPS:') || text.includes('SELECTION:')) {
				race.tips = fileItems[index + 1].text;

				// Commit and reset.
				races.push(race);
				race = defaultRace;
			}
		}
	}

	return races;
};

const jpotQuickmixAlgo = () => {};

export const extractRaces = (fileItems: any[]) => hollyWoodBetsAlgo(fileItems);

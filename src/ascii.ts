var pjson = require('../package.json');

export const title = 'Racecard Tip Extractor';
/**
 * https://patorjk.com/software/taag/
 * https://www.freeformatter.com/javascript-escape.html#before-output
 */
export const asciiTitle =
	"  _____                                  _   _______ _         ______      _                  _             \r\n |  __ \\                                | | |__   __(_)       |  ____|    | |                | |            \r\n | |__) |__ _  ___ ___  ___ __ _ _ __ __| |    | |   _ _ __   | |__  __  _| |_ _ __ __ _  ___| |_ ___  _ __ \r\n |  _  // _` |/ __/ _ \\/ __/ _` | '__/ _` |    | |  | | '_ \\  |  __| \\ \\/ / __| '__/ _` |/ __| __/ _ \\| '__|\r\n | | \\ \\ (_| | (_|  __/ (_| (_| | | | (_| |    | |  | | |_) | | |____ >  <| |_| | | (_| | (__| || (_) | |   \r\n |_|  \\_\\__,_|\\___\\___|\\___\\__,_|_|  \\__,_|    |_|  |_| .__/  |______/_/\\_\\\\__|_|  \\__,_|\\___|\\__\\___/|_|   \r\n                                                      | |                                                   \r\n                                                      |_|                                                    " +
	`v${pjson.version}`;

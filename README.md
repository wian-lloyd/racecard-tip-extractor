# Using this on a Windows OS

## Download Nodejs version v16.17.0

Install this https://nodejs.org/dist/v16.17.0/win-x86/node.exe using the install wizard.

## Copy the project files to your machine

We'll be saving this in the root user directory for ease of use. You may change this to a custom directory if you know how to navigate the file system using your shell.

1. Press the "Windows+R" buttons.

2. In the "Run" window that opens, in the "Open" field, paste: "%USERPROFILE%".

3. Unzip the project into the new Windows Explorer window that opens.

4. Open the unzipped project folder and confirm that the main directory contains the "package.json" file e.g.

```
Wian Lloyd/
├─ racecard-tip-extractor/
│  ├─ package.json
│  ├─ ...
```

5. Open Windows Powershell or Command Prompt.

6. Either should start in the "%USERPROFILE%" directory which will look something like "C:\Users\wian>".

7. Type the following commands(run each line one by one):

```
cd racecard-tip-extractor-master/
npm i
npm run build
npm start
```

Press ctrl+c and close the terminal window.

Installation is complete.

## Using the project after setup.

10. In the racecard-tip-extractor project in "%USERPROFILE%". There is a subdirectory named "in". Copy all the racecard pdf files to this directory. You can also specify a different directory to use e.g. "C:\Users\wian\Downloads" when using the tool but this is for ease of use.

11. Open Windows Powershell or Command Prompt.

12. Either should start in the "%USERPROFILE%" directory which will look something like "C:\Users\wian>".

13. Type the following commands(run each line one by one):

```
cd racecard-tip-extractor-master/
npm start
```

14. Read multiple files?(Y/n) - Do you want to extract the tips of multiple pdf files? Yes is default, press enter. Type n and press enter for single files.

15. Specify PDF file directory(default is "/home/wian/repos/private/racecard-tip-extractor") - Here you can specify a different location for pdf files. For now, since we copied the files to the "in" directory, press enter.

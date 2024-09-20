# HACKATHON 2024 for NCO

Team members:

1. Leo - team/tech lead;
2. Alena - junior frontend developer;
3. Elvira - junior frontend developer;
4. Ksenia - junior frontend developer;

Online hackathon 2024 creator - Natalia Davydova (https://t.me/natti_jun_front)

## Project setup

1. clone the repository
2. run `yarn` to install locally the necessary dependencies
3. run `yarn dev` to run the server, open http://localhost:5173/ in your browser (the URL will be written in the console after the successful server startup)
4. Install **Prettier** extension
5. Open VSCode settings -> search for 'format on save', enable it; 'default formatter' -> 'Prettier - Code Formatter'

## Development

1. `git switch main`

   `git pull --rebase` - to get the recent updates

2. create a feature branch and switch to it, f.e. with git checkout -b: `git checkout -b feature/create-header`
3. do your work
4. run `yarn lint` to lint the files and autofix the errors. If there are some errors left after that in the console - fix them manually. We use stylelint default rules, that can be found here: https://stylelint.io/user-guide/rules/
5. make a commit, and push the branch to the repo (`git push --set-upstream origin feature/do-smth` - this message appears when you try to `git push` your new branch for the first time, just copy-paste it to the console)
6. create a pull request your-branch -> main.

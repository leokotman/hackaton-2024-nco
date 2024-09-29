# HACKATHON 2024 for NCO

## See the app:

https://hackaton-2024-nco.vercel.app/

## Team members:

1. Leo - team/tech lead;
2. Alena - junior frontend developer;
3. Elvira - junior frontend developer;
4. Ksenia - junior frontend developer;

Online hackathon 2024 creator - Natalia Davydova (https://t.me/natti_jun_front)

Что сделано по проекту:
- сайт был разбит на блоки и на основные элементы;
- были сделаны переиспользуемые компоненты для дальнейшей работы;
- был сделан basic root styles;
- добавлены шрифты; кнопки; стили заголовков;
- сделан хэдер с основным героем;
- сделан футер со сслыками на соц.сети, картой и формой подписки на новости;
- сделан хэдер с теми же ссылками на соцсети и проч.;
- сделана секция цен;
- добавлены слайдеры в нужные секции;
- ссылки переходят на страницы соцсетей, ссылки на части сайта ведут к частям сайта, ссылка на имейл "напишите нам" ведет в новое сообщение на адрес компании в почтовом приложении, которое задано по по умолчанию на вашем компе.


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
5. make a commit
6. rebase your branch from the latest main `git switch main` , `git pull --rebase`, `git switch feature/create-header`, `git rebase main`
7. and push the branch to the repo (`git push` or `git push --set-upstream origin feature/do-smth` - this message appears when you try to `git push` your new branch for the first time, just copy-paste it to the console)
8. create a pull request your-branch -> main.

## Git workflow

```bash
git checkout {branch}
```
Work on branch
```bash
git add <files>
git commit -m 'message'
git push
```
On GitHub
- open Pull Request
- get feedback from the team
- merge code to 'main'

In VSCode
```bash
git checkout main
// Includes changes from branches
git pull
git checkout {branch}
git merge main
```
Continue work

Root folder
- [concurrently](https://duckduckgo.com) to run multiple commands ('npm run dev' in frontend && 'nodemon server.js' in backend)
```
npm i concurrently
```


Backend

-  jest
```
   npm install --save-dev jest
```
- express, cors, dotenv
```
npm install express dotenv cors  
```

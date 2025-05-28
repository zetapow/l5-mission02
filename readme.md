# Turners Car Insurance API
Using Test-Driven Development to build a backend for generating insurance quotations 

## Features
| API | Input | Output |
| --- | ----- | -------|
| Car Value | "{model: 'Civic', year: 2020}" | "car_value:6620" |
| Quote | "{car_value: 6620, risk_rating: 3}" | "{monthly: 16.55, yearly: 198.6}" |
| Discount | "{age: 44, experience: 10}" | "{discount_rate: 10}" |

## Test Driven Development
### Test case for discount rate API:
```javascript

describe("Convert driver's age and experience to discount rate", () => {
   // Normal case
   test("driver aged 30 with 5 years experience gets 10% discount", () => {
      expect(calculateDiscount(25, 5)).toEqual({ discount_rate: 10 });
   });
```

## Agile methodology (Scrum)
- **Sprint Planning**
- ![Jira Screenshot](/assets/images/jira-screen.png)
- **Daily Standups:** 1600 on teams

## Group 3
| Name | Contribution |
| --- | ----- |
| [Afton Lim](https://github.com/AftonLim) | Quotation API | 
| [Teancum Lopati](https://github.com/TLopati) | Car Value API | 
| [Peter Zhou](https://github.com/zetapow) | Discount Rate API | 


## Repo setup
- [concurrently](https://www.npmjs.com/package/concurrently) to run multiple commands ('npm run dev' in frontend && 'nodemon server.js' in backend)
- Install dependencies
```
npm install
```
Backend

-  [jest](https://jestjs.io/) JavaScript testing framework
```
   npm install --save-dev jest
```
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

# BarrigaReact Test Project

This project is used to BarrigaReact automation test using Cypress with Javascript.

## Dependencies

Install the items bellow:

1. NodeJS (last version)
2. Visual Code (last version)
3. Cypress (version 3.6.0)

Get clone this project to your computer and execute the commands bellow:

1. Open terminal.
2. Execute cd 'to the your paste' (Ex: name_your_paste).
```bash
cd barrigareact-cypress-js
```
3. On paste, execute the command in terminal.

```bash
npm run cypress:open
```
or
```bash
./node_modules/.bin/cypress open
```

4. Done! The painel cypress is opened to execute the tests.

---

## Routes:


Link
```link
https://barrigareact.wcaquino.me/login
```


---

## Obs:

To execute the tests on terminal, execute the commands, bellow:

1. On terminal, under the paste the project, execute the command in terminal, bellow:
 
  * To execute all tests and view results on terminal, execute the command:
```bash
npm run cypress:run -- --spec cypress
```

  * To execute only a tests and view result on screen, execute the command (alter the name file on command, ex: loginTest.spec.js):
```bash
npm run cypress:run -- --spec cypress/integration/loginTest.spec.js
```

  * To execute one test and view result on screen (without closing the screen), execute the command (alter the name file on command, ex: loginTest.spec.js):
```bash
npm run cypress:run -- --spec cypress/integration/loginTest.spec.js --headed --no-exit
```

  * To execute tests in browser Chrome, execute the command (alter the name file on command, ex: loginTest.spec.js):
```bash
npm run cypress:run -- --spec cypress/integration/loginTest.spec.js --headed --no-exit
```

  * To execute all specs tests, execute the command(alter the name of integration, ex: barriga to barriga-cy-test):
```bash
./node_modules/.bin/cypress run -- --spec cypress/integration/barriga/**/*
```

  * To execute all specs tests (mac or windows), execute the command (alter the name of integration, ex: barriga to barriga-cy-test):
```bash
./node_modules/.bin/cypress run -- --spec cypress/integration/loginTest.spec.js --browser chrome
```

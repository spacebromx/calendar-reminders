# Calendar Reminders

This App was bootstrapped using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

### Overview

This app renders a month-based calendar view. The date can be moved forward and backwards using the navigation buttons located at the top of the page. These are the main features:

- You can add reminders
- You can edit them
- You can delete all the reminders from a specific day
- You can delete any given reminder

### How to Run The App
1. Clone this repo in your machine
2. Inside the directory, issue the command `yarn install`
3. Once the dependencies are installed, run the command `yarn start` and go to `http://localhost:3000` if the script does not automatically redirect you there.

### How to Run The Tests
1. Inside the folder with the code, run the command `yarn test`
2. All the tests will run in watch mode

### Useful Scripts

I added some useful scripts inside `package.json`
- `build:css`: It builds `TailwindCSS` and generates a ready to import stylesheet
- `format`: Using Prettier, autoformats the js files inside `src`
- `lint`: Using ESLint, looks for and fixes (when possible) code smells and styling issues of files inside `src`


### Main Libraries Used
- [TailwindCSS](https://tailwindcss.com/) for fast UI prototyping
- [date-fns](https://date-fns.org/): dates handling
- [Formik](https://formik.org/): forms handling
- [yup](https://github.com/jquense/yup): schema validation for Formik
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for writing unit tests

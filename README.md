# React-Redux Starter
#### by Andrew4d3
This is a boilerplate designed to kickstart frontend projects using react and redux. It's built on top of [Create React App](https://github.com/facebookincubator/create-react-app) so you'll be able to use any tool/library included there and other libraries and utilities I included like:
- [Redux](https://redux.js.org/)
- [SASS](http://sass-lang.com/) stylesheet processor
- Pre-commit hook linter ([ESLint](https://eslint.org/))
- UI unit-tests using [Enzyme](https://eslint.org/)

## Requirements
- Node.js 6.11.4 or higher

## Setting up
1. Clone the repo: `$git clone https://github.com/Andrew4d3/react-redux-starter.git`
2. Install dependencies using: `$npm install` or if you prefer use yarn: `$yarn install`
3. Run the project with `$npm start`. Project will run at `http://localhost:3000/`

## Project Structure
The project main files are located at the `/src` folder which is pretty much the frontend root. So your work will be majorly focused there.
```
/src (root)
  /assets (to locate images and other static files)
  /common (to locate common functions or modules used across the app)
  /main (app's entry point)
  /modules (to locate the multiple components used by your app)
  /redux (to locate all the redux logic)
  /styles (to locate .css and/or .scss file)
  /tests (to locate unit test files)
```
The project structure you will find on this boilerplate just follows my personal preference. You are free to organize your project on the way you find it more convenient to do it.

## Sample Project
This boilerplate contains a sample project that can be used as guidance. It's just a simple webapp with two pages (or views) that implements a very simple redux functionality as it's updating a clock dynamically and performing a simple async action through redux. I won't go into details about how everything works since the code itself is pretty much self-explanatory. If you want me to clarify some parts you might not understand, feel free to open a github ticket. I will be glad to help you.

## License
MIT License. Feel free to use it in any commercial or open source project.

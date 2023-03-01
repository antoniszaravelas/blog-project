# Interview Task

## Installation

To get the application running, simply clone the repository and

```bash
npm install
cd interview_task
npm run start
```

## Description

This app communicates with the JSON Placeholder API and:

- Fetches all the Posts and sorts them alphabetically while outputting 5 of them every time
- Possibility to navigate to the next posts by changing the page
- Possibility to search for a specific post based on its title
- Possibility to create a post and send a POST Request by using Axios to JSONPlaceholder
- By Clicking on a Post the user is able to see the comments made for the specific post
- By Clicking on the Author of the Post, the user is able to see
  - Personal Information about the user
  - Other Recent Posts of the user
  - A Todo List of the User with Completed and non Completed Things (The things which are completed are crossed out, the user is able to delete a todo-activity as well as check/uncheck it from done/undone and vice versa)
  - Different Albums that belong to the user
- By clicking on an Album, photos of the album are fetched and displayed by using grid for layout/design reasons
- Last but not least, a "HOME" Icon which brings the user to the index page, where they started from.

## Dependencies

- fontAwesome
- axios
- react
- react-dom
- react-modal
- react-router-dom
- typescript
- uuid

## DevDependencies

- react-modal
- tailwindcss

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## License

[MIT](https://choosealicense.com/licenses/mit/) blog-projec

![Alt text](documentation/app/1.png?raw=true "Couple-app-1")
![Alt text](documentation/app/2.png?raw=true "Couple-app-2")
![Alt text](documentation/app/3.png?raw=true "Couple-app-3")

# COUPLE-APP

![Last version](https://img.shields.io/github/v/tag/justalk/couple-app.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/com/justalk/couple-app.svg?style=flat-square)](https://travis-ci.com/github/JustalK/couple-app)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/COUPLE-APP/badge.svg?branch=master)](https://coveralls.io/github/JustalK/COUPLE-APP?branch=master)
[![Maintainability Status](https://api.codeclimate.com/v1/badges/c8485eedcb2181b6908a/maintainability)](https://codeclimate.com/github/JustalK/COUPLE-APP/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c8485eedcb2181b6908a/test_coverage)](https://codeclimate.com/github/JustalK/COUPLE-APP/test_coverage)

This project is a game. The game is a simple and interactive quizz that will trigger discussion for a couple. The idea came from after my wife and me were looking online for such game and got really disappointed by what we find. So I decide to make my own.

This repository is designed only for the frontend part of the application. I made everything with `React Native`. Once finish the application will be available on Google Play for free.

I do my continuous integration with `Travis` and my coverage is checked by `Coveralls` and `Codeclimate`. I also use `CodeClimate` for checking the level of maintainability of the code. I use `Typescript` for improving the quality of the code, making it simpler to read and less buggy. For the testing, I use `Jess` linked with `Expo`. And finally for the formatting, I use `Prettier` and just after `EsLint` for linting the code.

I document pretty well my code following `JSDoc` standard, so feel free to dig into my code and comment.

## Organization

The following describe how the project is structured. It's an easy way for discovering the project and the way I organize the code.

#### Flowchart of the app

![Alt text](documentation/process/flowchart.png?raw=true "PORTFOLIO-Flowchart")

#### Connection to the API during development

For connecting to the API during the test, I use `localtunnel` for exposing the server to `Expo`. The server works on the port 5000, so I use the following commands :

```
npm install -g localtunnel
lt --port 5000 --subdomain couple-api
```

#### User stories

| As...  | I want...                                            | So that...                                    |
| :----- | :--------------------------------------------------- | :-------------------------------------------- |
| Player | I want to play                                       | So that I can have fun                        |
| Player | I want to setup the duration of the game             | So that the game is not too long              |
| Player | I want to select topics or levels                    | So that everyone is comfortable               |
| Player | I want to run the dices                              | So that I can choose who answer first         |
| Player | I want to answer multiple questions                  | So that the game is long                      |
| Player | I want to answer only x questions                    | So that the game can stop                     |
| Player | I want to stop the game in the middle                | So that I can take a pause                    |
| Player | I want to stop the current game anytime              | So I can restart the game or change options   |
| Player | I want to skip questions                             | So I can avoid questions                      |
| Admin  | I want to add questions                              | So that I can increase the number of question |
| Admin  | I want to edit questions                             | So that I can correct questions               |
| Admin  | I want to delete question                            | So that I can remove bad question             |

#### Organization general

| Folder's Name | Description of the folder                                                                     |
| :------------ | :-------------------------------------------------------------------------------------------- |
| env           | Contains the environment files                                                                |
| assets        | Contains the public files                                                                     |
| documentation | Regroup everything for documenting my way of thinking and docs                                |
| src           | The source code of the app                                                                    |

#### Mockup

![Alt text](documentation/mockups/home.jpg?raw=true "COUPLE-APP-HOME")
![Alt text](documentation/mockups/question.jpg?raw=true "COUPLE-APP-QUESTIONS")

#### Technical challenges

**Touch not working outside of a view**

At the moment of development, there was [a bug on react-native](https://github.com/facebook/react-native/issues/27232) where a touch event will not be fired if an element was outside of it's parent. On Home, I was using the start button at the bottom of the screen outside of the square, so it could not work. For fixing that and still getting the desired effect, I create two squares. The bigger one is here for having the touch event inside a parent and the smaller square for creating the visual.

**Styled-components does not have Pressable**

Pressable is a touch event from react native but it have not been typed by styled-components. So typescript cannot be use with a Pressable. For bypassing the problem, I have to comeback on the normal StyleSheet creation.

**Prettier does not want to use Camel Case on css**

Prettier recognize css properties like backgroundColor as an error. So for fixing and bypassing the problem. I use another convention like background-color.

#### Developing

For running the project, simply use :

```
npm run start
```

It will then run a browser with a QR code that you can use on expo for testing the app.

#### Tools

For linting the code :
```
npm run lint
```

For formatting the code :
```
npm run format
```

#### Building

For building an apk or app-bundle that could be use on Google Store or Apple Store :
```
npm run build-android
npm run build-ios
```

## License

MIT - Copyright &copy; [JUSTAL Kevin](http://justalk.online/)

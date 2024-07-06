The Challenge of Automation a Web UI and API using TestCafe

## The Challenge Details

### With Test Café use the provided server and UI to reproduce the next sequence of steps
**STEPS**:
Test 1 (required)
* Make an API call to retrieve the list of devices.
* Use the list of devices to check the elements are visible in the DOM. 
* Check the name, type and capacity of each element of the list using the class names and make sure they are correctly displayed.
* Verify that all devices contain the edit and delete buttons.


# 1. THE PROJECT

Below are described the details of the project, of what tools and lib were used, how to setup it, how to run and some additional info.

## 1.1. Description of the project Project
 _"TestCafe is a user-friendly end-to-end testing framework. Free and open source test runner. Powerful desktop app. Enterprise-quality web services._
 
## 1.2. Structure of the project Project

Belows are the tool used to perform the development of this project.
- [TestCafe](https://testcafe.io/)
- [Axios](https://axios-http.com/)
- [JavaScript](https://www.javascript.com/),

## 1.3. Prerequisites to run

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 16 or later - [download](https://nodejs.org/en/)
- NPM package manager properly setup

### 1.4 Installation / Setup

If you already have your server and UI already up, you just need to setup the test project, and you can do that, by simple running:
`npm install`

If you don't have the server, neither the UI or the tests setup, there is a script that was created to facilitate that, so you can just run those commands:
```
chmod +x start-applications.sh
./start-applications.sh
```
Then wait 2 or 3 minutes until all the setup is complete, and then you should be good to go.

_P.S. All the logs related to the setup of the server and the ui, related to the scripts, are going to be redirected to a file named nohup.out_

## 2. RUNNING THE TESTS

### 2.1. Execution of the tests

```
npm test                # executes the test suite
```

# About myself 
#### (the guy who received the challenge)

![ralves20-profile-avatar](https://avatars.githubusercontent.com/u/40844089)
#### This is my profile on Github: [ralves20](https://github.com/ralves20)


* I'm just a simple guy who is passionate about the testing automation and everything related to the software quality world.
* I'm enthusiastic about Design Patterns in software testing and the DevOps world too
* I love to watch comedy tv shows and movies
* Linux is the best!


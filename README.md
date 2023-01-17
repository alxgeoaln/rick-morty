# Rick and Morty project

Lists Rick and Morty characters



https://user-images.githubusercontent.com/23573176/212935011-d4b8aad8-bc6e-4543-8b68-d7cbae471aee.mov



## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install the project.

```bash
yarn
cd ios & pod install
```

## Run project

```bash
cd <projectRootDir> & yarn ios
```

## Test

```bash
yarn test
```

## Base dependencies

* [@react-navigation](https://reactnavigation.org/): handles screen navigation

* [axios](https://axios-http.com/docs/intro): handles network requests

* [@testing-library/react-native](https://testing-library.com/): handles unit testing

## Project structure

* `src`: Base folder that contains all the code
    * `api`: This folder contains all api calls
    * `common`: This folder contains theme files and utils
    * `components`: This folder contains all the reusable components of your app
    * `context`: This folder contains the global state management of this app
    * `navigation`: This folder contains all file parts of your navigation
    * `screns`: This folder contains all the screens used in navigation

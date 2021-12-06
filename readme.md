###### CONTENTS
- [Setup](#setup)
  - [1. Naming your package](#1-naming-your-package)
  - [2. Choose a package then clone](#2-choose-a-package-then-clone)
    - [📦 Standard Package ( CSS & JS )](#-standard-package--css--js-)
    - [📦 CSS Package](#-css-package)
    - [📦 JS Package](#-js-package)
  - [3. Configure remote and branch](#3-configure-remote-and-branch)
  - [4. Set up CI](#4-set-up-ci)
- [Models](#models)
  - [Util](#util)
  - [Pipe](#pipe)
- [Scripts](#scripts)

# Setup
The following example is creating Master org's package:
```sh
cd master
```
## 1. Naming your package
Give the suffix `.css` or `.util` or `.pipe` or not according to the design model of your package, e.g `PACKAGE_NAME=capitalize.util` : 

⌨️ copy and enter package name to terminal: 
```properties
PACKAGE_NAME=
```

## 2. Choose a package then clone
### 📦 Standard Package ( CSS & JS )
```sh
git clone -b standard https://github.com/master-style/package.git $PACKAGE_NAME
```
### 📦 CSS Package
```sh
git clone -b css https://github.com/master-style/package.git $PACKAGE_NAME
```
### 📦 JS Package
```sh
git clone -b js https://github.com/master-style/package.git $PACKAGE_NAME
```

## 3. Configure remote and branch
`gh auth login`, if you have not logged in yet. <a href="https://github.com/cli/cli#installation" target="_blank">Github CLI Installation | Github</a>

⌨️ copy and paste to terminal:
```sh
cd $PACKAGE_NAME
# create a github repository
gh repo create master-style/$PACKAGE_NAME --public
# reset origin
git remote remove origin
git remote add origin https://github.com/master-style/$PACKAGE_NAME.git
# add package remote
git remote add package https://github.com/master-style/package.git
# return to the main branch
git checkout -b main
# push
git push origin main
```

## 4. Set up CI
[Adding projects | CircleCI Docs](https://circleci.com/docs/2.0/project-build/#adding-projects)

> For the admin, opening [Master Style | CircleCI](https://app.circleci.com/projects/project-dashboard/github/master-style/) page and `Set Up Project`

# Models
⌨️ copy and paste to your `src/index.ts`

## Util
```ts
export function fn(target) {}
```

## Pipe
```ts
export class Pipe {
    constructor(
        private options?: { [key: string]: any }
    ) { }
    transform(target) {
        return;
    }
}
```

# Scripts
| script            | description                          |
| ----------------- | ------------------------------------ |
| `npm run update`  | update package environment to latest |
| `npm run build`   | output your production to `dist`     |
| `npm run release` | release version via semantic release |
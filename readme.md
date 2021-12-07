###### CONTENTS
- [Setup](#setup)
  - [1. Preset variable for quick](#1-preset-variable-for-quick)
    - [Package name](#package-name)
    - [Org name ( optional )](#org-name--optional-)
  - [2. Choose a package then clone](#2-choose-a-package-then-clone)
    - [📦 Standard Package ( CSS & JS )](#-standard-package--css--js-)
    - [📦 CSS Package](#-css-package)
    - [📦 JS Package](#-js-package)
  - [3. Go to the cloned folder](#3-go-to-the-cloned-folder)
  - [4. Remove cloned package origin](#4-remove-cloned-package-origin)
  - [5. Add a github repository and your origin](#5-add-a-github-repository-and-your-origin)
    - [Org repository](#org-repository)
    - [Personal repository](#personal-repository)
  - [6. Reset origin and branch to new repository](#6-reset-origin-and-branch-to-new-repository)
  - [7. Push created package to repository](#7-push-created-package-to-repository)
  - [8. Set up CI](#8-set-up-ci)
- [Scripts](#scripts)

# Setup

## 1. Preset variable for quick
Give the suffix `.css` or `.util` or not according to the design model of your package, e.g `PACKAGE_NAME=to-upper-case.util` : 

### Package name
```ps
# Mac Terminal
PACKAGE_NAME=

# PowerShell
$PACKAGE_NAME=
```

### Org name ( optional )
e.g `ORG_NAME=master-style`
```sh
# Mac Terminal
ORG_NAME=

# PowerShell
$ORG_NAME=
```
> If you are developing an organization package, please create or go an existing local folder first, e.g `mkdir master` or `cd master`

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

## 3. Go to the cloned folder
```sh
cd $PACKAGE_NAME
```

## 4. Remove cloned package origin
```sh
git remote remove origin
```

## 5. Add a github repository and your origin
Not logged in yet? [Github CLI Installation | Github](https://github.com/cli/cli#installation)
```sh
gh auth login -w
```

### Org repository
e.g `master-style`
```sh
gh repo create $ORG_NAME/$PACKAGE_NAME --public
git remote add origin https://github.com/$ORG_NAME/$PACKAGE_NAME.git
```

### Personal repository
Set your github `$USERNAME=` variable first
```sh
gh repo create $PACKAGE_NAME --public
git remote add origin https://github.com/$USERNAME/$PACKAGE_NAME.git
```

## 6. Reset origin and branch to new repository
```sh
git remote add package https://github.com/master-style/package.git
git checkout -b main
```

## 7. Push created package to repository
```sh
git push origin main
```

## 8. Set up CI
[Adding projects | CircleCI Docs](https://circleci.com/docs/2.0/project-build/#adding-projects)

> For the admin, opening [Master Style | CircleCI](https://app.circleci.com/projects/project-dashboard/github/master-style/) page and `Set Up Project`

# Scripts
| script            | description                          |
| ----------------- | ------------------------------------ |
| `npm run update`  | update package environment to latest |
| `npm run build`   | output your production to `dist`     |
| `npm run release` | release version via semantic release |
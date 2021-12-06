# Create
The following example is creating Master org's package:
```sh
cd master
```
## 1. Naming your package
Give the suffix `.css` or `.util` or `.pipe` or not according to the design pattern of your package, e.g `PACKAGE_NAME=capitalize.util` : 

Copy and enter package name to terminal: 
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
`gh auth login`, if you have not logged in yet. [Github CLI Installation | Github](https://github.com/cli/cli#installation)
```sh
cd $PACKAGE_NAME
gh repo create master-style/$PACKAGE_NAME --public
git remote remove origin
git remote add origin https://github.com/master-style/$PACKAGE_NAME.git
git remote add package https://github.com/master-style/package.git
git checkout -b main
```

# Scripts
| script            | description                          |
|-------------------|--------------------------------------|
| `npm run update`  | update package environment to latest |
| `npm run build`   | output your production to `dist`     |
| `npm run release` | release version via semantic release |
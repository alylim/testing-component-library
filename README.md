How this was created:

1. Make a `package.json` file

```
npm init
```

2. Install `react`, `react-dom`, `typescript`, `@types/react`, `@types/react-dom` as devDependenvies

```
npm install --save-dev react react-dom typescript @types/react @types/react-dom
```

3. add `react` and `react-dom` to peerDependencies

```json
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

4. Initialise a tsconfig file:

```
npx tsc --init
```

5. Add the following to the tsconfig file:

```json
  "jsx": "react-jsx",
    // optional?
  "jsxImportSource": "react",
```

6. Create a `src` folder and a /components folder inside it
7. Create a index.ts file inside the /components folder

8. Bundling using webpack:

- install webpack and webpack-cli as devDependencies

```
npm install --save-dev webpack webpack-cli ts-loader
```

- create a `webpack.config.js` file:

```js

```

9. publishing to github npm packages:

   1. generate a PAT
   2. create your repo in gh
   3. add publish-config to package.json
   4. add a .npmrc file with the following, replace TOKEN with the PAT generated in step 1:

   ```
   //npm.pkg.github.com/:_authToken=TOKEN
   ```

   5. Run `npm publish`, and you should see it in your github packages.

10. Installing the library:

    1. In your project, add a .npmrc file in the same level as your package.json file

    ```
    @NAMESPACE:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=TOKEN
    ```

    2. Install the package as per command in github packages!

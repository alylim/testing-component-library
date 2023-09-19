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

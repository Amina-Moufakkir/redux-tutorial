# Getting Started with Redux Toolkit

### Docs
[Redux Toolkit Docs](https://reus-tookit.js.org/inrtoduction/getting-started)

### Install

```js
npm install @reduxjs/toolkit react-redux

```

#### Setup Store

- create store.js

- import `{ configureStore } from '@reduxjs/toolkit'`

- `configureStore()` is a built-in function in Redux.

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
});
```

#### Setup Provider

- inside `index.js`

```js
import { Provider } from 'react-redux';
import { store } from './store'; 


root.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
)
```



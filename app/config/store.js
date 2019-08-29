import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../screens/shared/reducers';

const middleware = composeWithDevTools(applyMiddleware(thunk, promise));

export default createStore(rootReducer, middleware);

// import thunkMiddleware from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import rootReducer from '../screens/shared/reducers';

// const middlewares = [thunkMiddleware, promise];
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middlewares))
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import GlobalReducer from './reducers/GlobalReducer';

export default configureStore({
  reducer: {
    global_values: GlobalReducer,
  },
});

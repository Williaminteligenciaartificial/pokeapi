import {configureStore } from '@reduxjs/toolkit';

import trainer from './traainer.slice';

export default configureStore({
    reducer: {trainer},
}) 

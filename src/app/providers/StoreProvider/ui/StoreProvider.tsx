import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };

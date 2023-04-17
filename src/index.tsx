import Navigator from './DrawerNavigator';
import {store} from './redux/store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

import * as items from './items';
import * as recents from './recents';
import * as theme from './theme';

import * as Types from './types';
export {Types};

const clearSaved = () => ({type: Types.CLEAR_SAVED})

export default {...items, ...recents, ...theme, clearSaved};

import {runningInBrowser} from 'utils/common';

const localForage = runningInBrowser() && require('localforage');

if (runningInBrowser()) {
    localForage.config({
        driver: localForage.INDEXEDDB,
        name: 'ente-files',
        version: 1.0,
        storeName: 'files',
    });
}
export default localForage;

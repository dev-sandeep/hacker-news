import { useContext } from 'react';
import { BaseContext } from './BaseContext'

const UseBaseContext = () => {
    const [state, setState] = useContext(BaseContext);

    function getLocalStorageData(customDataObj) {
        return JSON.parse(localStorage.getItem(customDataObj));
    }

    function setLocalStorageData(data, customDataObj) {
        localStorage.setItem(customDataObj, JSON.stringify(data));
    }

    function setData(data, customDataObj) {
        setState(state => ({
            ...state, [customDataObj]: data
        }));

        //sync in localstorage for data persistance
        // setLocalStorageData(data, customDataObj);
    }

    function getData(customDataObj) {
        return state[customDataObj];
    }

    function syncFromLocalStorage() {
        let localData = getLocalStorageData('mainData');
        console.log(localData);
    }

    return {
        setData,
        getData,
        getLocalStorageData,
        syncFromLocalStorage
    }
}


export default UseBaseContext;
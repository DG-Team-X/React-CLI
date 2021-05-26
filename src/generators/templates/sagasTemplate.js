import _ from 'lodash';

export default (name, l) => {
return `
import { put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../utils/api';

function* ${_.capitalize(name) + _.capitalize(l)}Saga(params) {
    const { data, status } = yield call(api, URL, method, params);

    if(status === 200) {
        yield put(${_.capitalize(name)}Success({data: data}));
    } else {
        yield put(${_.capitalize(name)}Failure(null));
    }
}

function* watch${_.capitalize(name)}Saga() {
    yield takeLatest(${_.capitalize(name) + _.capitalize(l)}Action.REQUEST, ${_.capitalize(name) + _.capitalize(l)}Saga);
}

export {
    watch${_.capitalize(name)}Saga
}
`
}
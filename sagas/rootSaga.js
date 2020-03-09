import { takeLatest, takeEvery } from 'redux-saga/effects';
import ACTION from '../actions/actionsTypes';
import {
    loginSaga,
    getCurrentUserSaga,
    signUpSaga,
    resetPasswordSaga,
    validateEmailSaga,
    resendCodeSaga,
    logoutSaga,
    editCurrentUserSaga,
} from './userSaga';

import {
    getPracticeListSaga,
    getListOfDiseasesByPracticeIdSaga,
    getMyStuffSaga,
    deleteMyStuffByIdSaga,
    addToMyStuffByIdSaga,
} from './practiceSaga';

import {loadKeySaga} from './authSaga';
import {getVideoSaga} from './videoSaga';

function* rootSaga() {
    yield takeLatest(ACTION.LOGOUT, logoutSaga);
    yield takeLatest(ACTION.LOGIN, loginSaga);
    yield takeLatest(ACTION.SIGNUP, signUpSaga);
    yield takeLatest(ACTION.GET_CURRENT_USER, getCurrentUserSaga);
    yield takeLatest(ACTION.EDIT_CURRENT_USER, editCurrentUserSaga);
    yield takeLatest(ACTION.RESET_PASSWORD, resetPasswordSaga);
    yield takeLatest(ACTION.VALIDATE_EMAIL, validateEmailSaga);
    yield takeLatest(ACTION.RESEND_CODE, resendCodeSaga);
    yield takeLatest(ACTION.GET_PRACTICE_LIST, getPracticeListSaga);
    yield takeLatest(ACTION.GET_LIST_OF_DISEASES_BY_PRACTICE_ID, getListOfDiseasesByPracticeIdSaga);
    yield takeLatest(ACTION.GET_MY_STUFF, getMyStuffSaga);
    yield takeLatest(ACTION.DELETE_MY_STUFF_BY_ID, deleteMyStuffByIdSaga);
    yield takeLatest(ACTION.ADD_TO_MY_STUFF_BY_ID, addToMyStuffByIdSaga);
    yield takeLatest(ACTION.LOAD_KEY, loadKeySaga);
    yield takeLatest(ACTION.VIDEO, getVideoSaga);
}

export default rootSaga;

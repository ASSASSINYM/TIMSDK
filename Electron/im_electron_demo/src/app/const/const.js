const path = require("path")
const os = require('os');

const MINSIZEWIN = 'MINSIZEWIN';
const RENDERPROCESSCALL = 'RENDERPROCESSCALL';
const MAXSIZEWIN = 'MAXSIZEWIN';
const CLOSE = 'CLOSE';
const SHOWDIALOG = 'SHOWDIALOG';
const DOWNLOADFILE = 'DOWNLOADFILE';
const GET_VIDEO_INFO = 'GET_VIDEO_INFO';
const SELECT_FILES = 'SELECT_FILES';
const SELECT_FILES_CALLBACK = 'SELECT_FILES_CALLBACK';
const DOWNLOAD_PATH = path.resolve(os.homedir(), 'Download/')
const OPEN_CALL_WINDOW = 'OPEN_CALL_WINDOW';
const CLOSE_CALL_WINDOW = 'CLOSE_CALL_WINDOW';
const CALL_WINDOW_CLOSE = 'CALL_WINDOW_CLOSE';
const CALL_WINDOW_CLOSE_REPLY = 'CALL_WINDOW_CLOSE_REPLY';
const GET_VIDEO_INFO_CALLBACK = 'GET_VIDEO_INFO_CALLBACK';
const CHECK_FILE_EXIST = 'CHECK_FILE_EXIST';
const GET_FILE_INFO_CALLBACK = 'GET_FILE_INFO_CALLBACK';
const END_CALL_WINDOW = 'END_CALL_WINDOW'
const SUPPORT_IMAGE_TYPE = ['png', 'jpg', 'gif', 'PNG', 'JPG', 'GIF' ];

const SDK_APP_ID = '1400187352'; // sdkappid 

module.exports = {
    MINSIZEWIN,
    RENDERPROCESSCALL,
    MAXSIZEWIN,
    CLOSE,
    SHOWDIALOG,
    DOWNLOADFILE,
    GET_VIDEO_INFO,
    SELECT_FILES,
    SELECT_FILES_CALLBACK,
    GET_FILE_INFO_CALLBACK,
    DOWNLOAD_PATH,
    OPEN_CALL_WINDOW,
    CALL_WINDOW_CLOSE,
    CALL_WINDOW_CLOSE_REPLY,
    GET_VIDEO_INFO_CALLBACK,
    CLOSE_CALL_WINDOW,
    CHECK_FILE_EXIST,
    SUPPORT_IMAGE_TYPE,
    END_CALL_WINDOW,
    SDK_APP_ID
}
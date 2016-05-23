/**
 * Created by vuji on 16/4/27.
 */

var SqlExec = require("../../connection/mysqlExec");
var chatMessageSql = require("../sql/chatMessageSql");
var sqlExec = new SqlExec();

var chatMessageDao = function(){};

/**
 * 聊天记录插入
 * @param params
 * @param cb
 */
chatMessageDao.prototype.insertMsg = function(params,cb){
    sqlExec.exe(chatMessageSql.insertChatMsg,params,cb);
};

module.exports = chatMessageDao;
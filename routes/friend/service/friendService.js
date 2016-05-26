/**
 * Created by vuji on 16/5/11.
 */
var FriendDao = require("../dao/friendDao");
var friendDao = new FriendDao();
var friendService = function(){};

/**
 * 查询用户好友列表
 * @param parsms
 * @param cb
 */
friendService.prototype.getFriends = function(parsms,cb){
    friendDao.queryFriends(parsms,function(data){
        if(data.code == 0){
            cb(0,data);
        }else if(data.code == -1){
            cb(1,"插入失败!");
        }else{
            cb(1,"数据库异常!");
        }
    })
}

/**
 *  获得分组列表
 * @param params
 * @param cb
 */
friendService.prototype.getFriendSet = function(params,cb){
    friendDao.getFriendSet(params,function(data){
        if(data.code == 0){
            cb(0,data);
        }else if(data.code == -1){
            cb(1,"查询失败!");
        }else{
            cb(1,"数据库异常!");
        }
    })
}

/**
 * 验证好友是否存在
 * @param params
 * @param cb
 */
friendService.prototype.verifyIsExist = function(params,cb){
    friendDao.verifyIsExist(params,function(data){
        if(data.affectedRows == 0){
            cb(0,"好友不存在!");
        }else if(data.affectedRows == 1){
            cb(1,"该好友已存在!");
        }else{
            cb(1,"查询异常!");
        }
    })
}

/**
 * 添加好友
 * @param params
 * @param cb
 */
friendService.prototype.addFriend = function(params,cb){
    friendDao.addFriend(params,function(data){
        if(data.code == 0){
            cb(0,data);
        }else if(data.code == -1){
            cb(1,"查询失败!");
        }else{
            cb(1,"数据库异常!");
        }
    })
}

module.exports = friendService;
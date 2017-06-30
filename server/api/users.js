const conn = require('../conn/conn');

class Users {
    constructor (conn) {}

    getRouters () {
        return {
            '/users': {
                'get': this.getUsersBaseInfo,
                'post': this.updateUsersBaseInfo,
                'put': this.addUsersBaseInfo,
                'delete': this.delUsersBaseInfo
            }
        }
    };

    /**
     * 新增用户
     */
    addUsersBaseInfo (ctx) {
        // `Account`, `Email`, `Pic`, `Tel`, `Career`, `Birthday`, `Company`, `Address`
        let arr = new Array(8);
        arr[0] = ctx.query.Account || null;
        arr[1] = ctx.query.Email || null;
        arr[2] = ctx.query.Pic || null;
        arr[3] = ctx.query.Tel || null;
        arr[4] = ctx.query.Career || null;
        arr[5] = ctx.query.Birthday || null;
        arr[6] = ctx.query.Company || null;
        arr[7] = ctx.query.Address || null;
        return new Promise((resolve, reject) => {
            conn.insert('call i_users_base_info(?, ?, ?, ?, ?, ?, ?, ?);', arr)
            .then((result) => {
                res.Success(ctx, result);
            })
            .catch(err => {
                res.BadRequest(ctx, err);
            })
        })
    };

    getUsersBaseInfo (ctx) {
        return new Promise((resolve, reject) => {
            conn.query('select * from `users_base_info` where Account=?', ctx.query.Account || '')
            .then((result) => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
        })
    };

    updateUsersBaseInfo (ctx, next) {
        // `Account`, `Email`, `Pic`, `Tel`, `Career`, `Birthday`, `Company`, `Address`
        let params = new Array(8);
        debugger;
        params[0] = ctx.request.body.Account || null;
        params[1] = ctx.request.body.Email || null;
        params[2] = ctx.request.body.Pic || null;
        params[3] = ctx.request.body.Tel || null;
        params[4] = ctx.request.body.Career || null;
        params[5] = ctx.request.body.Birthday || null;
        params[6] = ctx.request.body.Company || null;
        params[7] = ctx.request.body.Address || null;
        return new Promise((resolve, reject) => {
            conn.update('call u_users_base_info(?, ?, ?, ?, ?, ?, ?, ?);', params)
            .then((result) => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
        });
    };

    delUsersBaseInfo (ctx, next) {
        return new Promise((resolve, reject) => {
            conn.delete('DELETE FROM `users_base_info` WHERE `Account`= ?;', ctx.query.Account)
            .then((result) => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
        });
    };
    
}

exports = module.exports = new Users().getRouters();
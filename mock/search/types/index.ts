/**
 * 列表中模糊匹配
 *
 * 1: 手机号
 * 2: 邮箱
 * 3: 昵称
 *
 * 4: 真实姓名
 * 5: 用户ID
 * 6: MT4账号
 *
 * 7: 存款单号
 * 8: 取款单号
 * 9: 交易单号
 */
 export enum SearchType {
    Phone = 1,
    Email = 2,
    NickName = 3,
    RealName = 4,
    UID = 5,
    MT4 = 6,
    Deposit = 7,
    Withdrawal = 8,
    Trade = 9
}

/**
 * 列表中标识客户身份
 * 1: 客户
 * 2: 用户
 */
export enum Role {
    User = 1,
    Customer = 2
}

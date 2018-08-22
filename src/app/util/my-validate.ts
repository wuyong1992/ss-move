/**
 * 校验手机号
 * @param {string} phone
 */

export const ValidatePhone = (phone: string): boolean => {
    let pattern = /^1(3[0-9]|4[0-9]|5[0-9]|6[6]|8[0-9]|9[0-9]|7[0-9])\d{8}$/;
    return pattern.test(phone);
};

/**
 * 校验QQ号
 * @constructor
 * @param qq
 */
export const ValidateQQ = (qq: string): boolean => {
    let pattern = /[1-9]([0-9]{5,11})/;
    return pattern.test(qq);
};


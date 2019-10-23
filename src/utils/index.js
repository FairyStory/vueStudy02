
// 验证是否是邮箱
export const isEmail = function (str) {
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
}
  
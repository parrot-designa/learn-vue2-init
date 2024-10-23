// 判断是否是数组
export const isArray = Array.isArray
// 判断是否是原始类型
export function isPrimitive(value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
}
// 空函数 可以避免undefined错误
export function noop(a, b, c) {}
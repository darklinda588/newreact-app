/*
 * action 类型
 */

export const aaa = 'aaa';

/*
 * action 创建函数
 */

export function addTodo(text) {
  return {
    type: aaa,
    text
  }
}
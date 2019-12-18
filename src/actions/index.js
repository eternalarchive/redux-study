export const ADD = 'ADD'

export function add(val) {
  return ({ type: ADD, val })
}
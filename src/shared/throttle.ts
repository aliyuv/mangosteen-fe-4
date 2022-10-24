export const throttle = (fn: Function, time: number,) => {
  let timer: number | undefined = undefined
  return (...args: any[]) => {
    if (timer) {
      return
    } else {
      fn.call(undefined, ...args)
      timer = setTimeout(() => {
        timer = undefined
      }, time)
    }
  }
}
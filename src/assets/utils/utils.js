export function toObj (str) {
  let obj = {}
  let arr = str.split(',')
  arr.forEach(r => {
    let info = r.split(':')
    obj[info[0]] = info[1]
  })
}

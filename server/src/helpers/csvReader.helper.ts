import { readFile } from 'fs/promises'
import { EOL } from 'os'


export default async function (dir: string) {
  return await readFile(dir)
    .then(res => res.toString())
    .then(strRes => strRes.split(EOL))
    .then(arr => {
      const result = []
      const keys = arr[0].split(',')
      
      for (let i = 1; i < arr.length; i++) {
        if (Object.keys(keys).length === arr[i].split(',').length) {
          const datum = {}
          
          arr[i]
          .split(',')
          .map((el, index) => datum[keys[index]] = el)
          
          result.push(datum)
        }
      }
      
      return result
    })
}
import fs from 'fs'
import path from 'path'
import { yarg } from './config/plugins/args.plugin'

const message: string = 'Hello world'
console.log(message)

const arr = []

const number: number = yarg.b

for (let i = 1; i <= yarg.l; i++) {
  let result: number = number * i
  arr.push(`${number} x ${i} = ${result}\n`)
}

const newData = `
======================
      Tabla del ${number}
======================\n\n
${arr.join('')}`

const filePath = path.resolve(__dirname, `output/tabla-${yarg.b}.txt`)
fs.writeFileSync(filePath, newData, 'utf-8')

if (yarg.s) {
  console.log(newData)
}

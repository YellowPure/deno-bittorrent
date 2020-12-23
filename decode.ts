import {decode} from 'https://deno.land/x/bencode@v0.1.2/mod.ts'

const file = Deno.args[0]
console.log(decode(Deno.readFileSync(file)))





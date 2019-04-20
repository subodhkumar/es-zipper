#!/usr/bin/env node
const zlib = require(`zlib`);
const program = require(`commander`);

const { description, version } = require(`./package.json`);
program
  .description(description)
  .version(version, `-v, --version`)
  .command(`eszip <input> [output...]`).action((input,output)=>{console.log(`COMMAND ZIP`)})
  .option(`-g, --gzip <input> []`,`gzip algorithm`)
  .option(`-b, --brotli`,`brotli algorithm`)
  .option(`-d, --deflate`,`deflate algorithm`)
  .parse(process.argv);

  console.log(process.argv);
  if(program.gzip){
      console.log(`GZIP`);
  }
  else if(program.brotli){
    console.log(`BROTLI`);
  }
  else if(program.deflate){
    console.log(`DEFLATE`);
  }
  else {
    console.log(`DEFAULT`);
  }
//   console.log(`${JSON.stringify(program)}`)
// program.command('start').description(`Start process`).action(()=>{
//     console.log(` Action Start `);
// }).parse(process.argv);
// const fs = require(`fs`);
// const inp = fs.createReadStream(``);
// const out = fs.createWriteStream(``);

// const gzip = zlib.createGzip();
// inp.pipe(gzip).pipe(out);

// ZIP | UNZIP |

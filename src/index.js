#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import minimist from 'minimist';
import { exit, execPath } from 'process';
import commands from './commands';

export const args = minimist(process.argv);
export const node = args._.shift();
export const cli = args._.shift();
export const command = args._.shift();

console.log(args);
// console.log(process.cwd());
// console.log(execPath);
// console.log(__dirname);

if(args.help) {
    const help = [];

    Object.keys(commands).forEach(cmdKey => {
        const commandClass = commands[cmdKey];
        const cmd = new commandClass();
        
        if(cmd.help)
            cmd.help();
    })
} else {

    if(command) {

        const commandData = command.split(':');

        const action = new commands[commandData[0]];
        action.execute(commandData, args);

    } else {

        console.error('undefined command');

    }

}
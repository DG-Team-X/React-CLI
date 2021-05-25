import fs from 'fs';
import path from 'path';
import { args } from '..';
import c from './c';

export const lcFirst = (str) => str ? str[0].toLowerCase() + str.slice(1) : str;
export const ucFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str;

export const srcPath = () => [ process.cwd(), args.src || 'src' ];

export function directory(dirPath) {
    const currentArray = [];
    dirPath.split('/').forEach(element => {
        currentArray.push(element);
        const currentResolvePath = path.resolve(...srcPath(), ...currentArray);

        if (!fs.existsSync(currentResolvePath)) {
            fs.mkdirSync(currentResolvePath);
            console.log(c.command(`Generated directory in path [${path.resolve(...srcPath(), ...currentArray)}]`))
        }
    })
}

export function file(dirPath, fileName, content) {
    const filePath = path.resolve(...srcPath(), ...dirPath.split('/'), fileName);
    fs.writeFileSync(filePath, content.trim());
    console.log(c.command(`Generated file in path [${path.resolve(...srcPath(), ...dirPath.split('/'), fileName)}]`))
}

export function read(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(
            [...srcPath(), ...dirPath.split('/')].join('/'), 
            (err, files) => !err ? resolve(files) : reject(err)
        )
    })
}
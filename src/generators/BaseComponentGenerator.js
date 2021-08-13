import { files } from "../utils";
import componentTemplate from "./templates/componentTemplate";
import exportsTemplate from "./templates/exportsTemplate";
import stylesTemplate from "./templates/stylesTemplate";

export default class BaseComponentGenerator {

    static alias = 'bc';
    static description = 'Make a base component'
    
    constructor(args) {
        const name = args._.shift();
        if(name) {
            this.args = args;
            this.name = files.ucFirst(name);
            this.dir = `baseComponents/${this.name}`;
        } else {
            // this.help()
            throw new Error("component name required");
        }
    }

    generate() {
        this.generateDirectory();
        this.generateComponent();
        this.generateStyles();
        this.generateExports()
    }

    generateDirectory() {
        files.directory(this.dir);
    }

    generateComponent() {
        const imports = [
            `import React from 'react'`,
            `import './${this.name}.scss'`,
        ];

        const componentCode = componentTemplate(imports, this.name);

        files.file(this.dir, `${this.name}.jsx`, componentCode);
    }

    generateStyles() {
        const stylesCode = stylesTemplate(this.name);
        files.file(this.dir, `${this.name}.scss`, stylesCode);
    }

    generateExports() {
        files.read('baseComponents').then(list => {
            const components = list.filter(fname => fname != "index.js")
            const exportsCode = exportsTemplate(components);

            files.file('baseComponents', 'index.js', exportsCode);
        })
    }
}
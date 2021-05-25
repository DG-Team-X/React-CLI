import { files } from "../utils";
import componentTemplate from "./templates/componentTemplate";
import exportsTemplate from "./templates/exportsTemplate";
import stylesTemplate from "./templates/stylesTemplate";

export default class ComponentGenerator {

    static alias = 'c';
    static description = 'Make a component'
    
    constructor(args) {
        const name = args._.shift();
        if(name) {
            this.args = args;
            this.name = files.ucFirst(name);
            this.dir = `components/${this.name}`;
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
        files.file(this.dir, `${files.lcFirst(this.name)}.scss`, stylesCode);
    }

    generateExports() {
        files.read('components').then(list => {
            const components = list.filter(fname => fname != "index.js")
            const exportsCode = exportsTemplate(components);

            files.file('components', 'index.js', exportsCode);
        })
    }
}
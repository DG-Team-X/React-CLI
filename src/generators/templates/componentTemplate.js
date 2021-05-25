import { files } from "../../utils"

export default (imports, name) => {
return `
${imports.join("\n")}

const ${name} = (props) => {
    return (
        <div className="${files.lcFirst(name)}">

        </div>
    );
};

export default ${name};
`
}
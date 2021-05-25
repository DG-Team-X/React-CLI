export default (components) => {
return `
${components.map(component => `export {default as ${component}} from './${component}'`).join("\n")}
`
}
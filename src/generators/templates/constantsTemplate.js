import _ from 'lodash';

export default (name, list) => {
return `
export const ${_.capitalize(name) + _.capitalize(list)}Action = {
    // types
    REQUEST: '${name.toUpperCase()}${list ? '_' + list.toUpperCase(): ''}_REQUEST',
    SUCCESS: '${name.toUpperCase()}${list ? '_' + list.toUpperCase(): ''}_SUCCESS',
    FAILURE: '${name.toUpperCase()}${list ? '_' + list.toUpperCase(): ''}_FAILURE'
}
`
}
import _ from 'lodash';

export default (name, testing) => {
return `

const ${_.capitalize(name) + _.capitalize(testing)}Request = () => ({
    type: 
})

export {

}
`
}
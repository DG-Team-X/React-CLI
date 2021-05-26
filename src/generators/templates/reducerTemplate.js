export default (name) => {
return `
import { } from '../actions/${name}';

const inisitalState = {
    // params
}

export default function (state = inisitalState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
`
}
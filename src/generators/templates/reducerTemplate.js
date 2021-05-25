export default (name) => {
return `
import { } from '../actions/${name}';

const INITIAL_STATE = {
    list: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
`
}
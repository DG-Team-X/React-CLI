import { files } from "../utils";
import actionTemplate from "./templates/actionTemplate";
import reducerTemplate from "./templates/reducerTemplate";
import sagasTemplate from "./templates/sagasTemplate";

const dirs = {
    actions: 'store/actions',
    reducers: 'store/reducers',
    sagas: 'store/sagas',
};

export default class StoreGenerator {
    static description = 'Make a store'

    constructor(args) {
        const name = args._.shift();
        if(name) {
            this.args = args;
            this.name = files.lcFirst(name);
            this.dir = `store/${this.name}`;
        } else {
            throw new Error("component name required");
        }
    }

    generate() {
        this.generateDirectory();
        this.generateAction();
        this.generateReducer();
        this.generateSaga();
        // this.generateState();
    }

    generateDirectory() {
        files.directory('store/actions');
        files.directory('store/reducers');
        files.directory('store/sagas');
    }

    generateAction() {
        files.file(dirs.actions, `${this.name}.js`, actionTemplate(this.name));
    }

    generateReducer() {
        files.file(dirs.reducers, `${this.name}.js`, reducerTemplate(this.name));
    }

    generateSaga() {
        files.file(dirs.sagas, `${this.name}.js`, sagasTemplate(this.name));
    }

    // generateState() {
    //     files.file(dirs.s, `${this.name}.js`, '');
    // }

}
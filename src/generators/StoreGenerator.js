import { files } from "../utils";
import actionTemplate from "./templates/actionTemplate";
import reducerTemplate from "./templates/reducerTemplate";
import sagasTemplate from "./templates/sagasTemplate";
import constantsTemplate from "./templates/constantsTemplate";

const dirs = {
    actions: 'store/actions',
    reducers: 'store/reducers',
    sagas: 'store/sagas',
    constants: 'store/constants'
};

export default class StoreGenerator {

    static alias = 's';
    static description = 'Make a store'

    constructor(args) {
        const name = args._.shift();
        if(name) {
            this.args = args;
            this.name = files.lcFirst(name);
            this.dir = `store/${this.name}`;
            console.log(this.args);
        } else {
            throw new Error("component name required");
        }
    }

    generate() {
        this.generateDirectory();
        this.generateAction();
        this.generateReducer();
        this.generateSaga();
        this.generateConstants();
    }

    generateDirectory() {
        files.directory('store/actions');
        files.directory('store/reducers');
        files.directory('store/sagas');
        files.directory('store/constants')
    }

    generateAction() {
        files.file(dirs.actions, `${this.name}.js`, actionTemplate(this.name, this.args.list));
    }

    generateReducer() {
        files.file(dirs.reducers, `${this.name}.js`, reducerTemplate(this.name, this.args.list));
    }

    generateSaga() {
        files.file(dirs.sagas, `${this.name}.js`, sagasTemplate(this.name, this.args.list));
    }

    generateConstants() {
        files.file(dirs.constants, `${this.name}.js`, constantsTemplate(this.name, this.args.list ? this.args.list : ''));
        
    }
}
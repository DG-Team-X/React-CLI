import generators from "../generators";
import { help } from "../utils";
import BaseCommand from "./BaseCommand";

class MakeCommand extends BaseCommand {
    name = "make";

    help() {
        const data = {
            title: 'Make',
            items: Object.keys(generators).map(generator => help.command(
                `make:${generator}`,
                `make:${generators[generator].alias}`,
                generators[generator].description
            ))
        }

        help.render(data);
    }

    execute(data, args) {
        const type = data[1];
        const aliasKey = Object.keys(generators).find(gKey => generators[gKey].alias == type);
        const generatorClass = aliasKey ? generators[aliasKey] : generators[type];

        console.log(generatorClass);

        if(generatorClass) {
            try {
                const generator = new generatorClass(args);
                generator.generate();
            } catch(err) {
                console.error(err);
                super.help();
            }
        } else {
            super.help();
        }
    }
}

export default MakeCommand;
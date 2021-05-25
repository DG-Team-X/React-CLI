class BaseCommand {
    name = '';
    
    help() {
        console.error("help " + this.name);
    }

    helpGenerate() {
        
    }

}

export default BaseCommand
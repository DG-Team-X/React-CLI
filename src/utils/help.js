import c from "./c";

export const render = (item) => {
    renderItem(item, 0);
}

export const renderItem = (item, lvl) => {
    if(item.title) { 
        console.log( space(lvl) + c.title(item.title) );
    }
    
    if(item.text) {
        console.log( space(lvl) + item?.text );
    }

    if(item.items) {
        item.items.forEach(item => renderItem(item, lvl + 1))
    }
}

export const command = (command, description) => {
    return {
        text: `${c.green(command).padEnd(28, ' ')} ${description}`
    }
}

export const space = (n) => {
    let result = '';
    for(let i = 0; i < n; i++) {
        result += '  ';
    }
    return result;
}
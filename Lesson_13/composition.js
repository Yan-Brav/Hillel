function createProgrammer(name) {
    const programmer = {name};
    return{
        ...programmer,
        ...canCode(programmer)
    };
}
function canCode({name}){
    return {
        code: () => console.log(`${name} is coding`)
    }
}

function createFrontend(name){
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canReact(programmer)
    }
}
function canReact({name}) {
    return {
        react: () => console.log(`${name} is coding by ReactJS`)
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer
    }
}

function canNode({name}) {
    return {
        node: () => console.log(`${name} is coding by NodeJS`)
    }
}

function createFullStack(name){
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canCode(programmer),
        ...canReact(programmer),
        ...canNode(programmer)
    }
}

console.log(createFullStack('Maxim'));
createFullStack('Maxim').node();

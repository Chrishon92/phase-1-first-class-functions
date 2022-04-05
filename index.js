function receivesAFunction(spy) {
    return spy()

}

function returnsANamedFunction() {
    return function variable() {
    
    }
    
}

function returnsAnAnonymousFunction() {
    return () => console.log('anything')
}
/**
 * Compose method examples
 * @param  
 */
function composeFunc(fnlist) {
    return function (arg) {
        let collector = arg;
        for (let i = fnlist.length - 1; i >= 0; i--) {
            collector = fnlist[i].call(this, collector);
        }
        return collector;
    }
}
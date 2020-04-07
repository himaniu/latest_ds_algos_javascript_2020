
/**
 * create utility function zipObjectDeep(props, values)
 * examples:
 *  zipObjectDeep(['a.b[0].c', a.b[1].d, [1,2])
 * -> {a: { b :[ {c:1}, {d:2} ] }}
 * "{"a":{"b":[{"c":1},{"d":2}]}}"
 *              
 */


const propIsArray = (prop) => prop.indexOf('[') > -1 && prop.indexOf(']');

const getArrayIndex = (prop) => prop.substring(prop.indexOf('[') + 1, prop.indexOf(']'));

const getArrayName = (prop) => prop.substring(0, prop.indexOf('['));


const zipObjectDeep = (props, values) => {
    let resultObj = {};
    for (let i = 0; i < props.length; i++) {
        let currentobj = resultObj;
        let path = props[i].split('.');

        for (let j = 0; j < path.length; j++) {
            let prop = path[j];
            const isLastKey = (j === path.length - 1);
            // if prop is array like 'a[0]' ; need to handle it
            if (propIsArray(prop)) {
                let arrayIndex = getArrayIndex(prop);
                prop = getArrayName(prop);
                if (!currentobj[prop]) {
                    currentobj[prop] = [];
                }
                if (isLastKey) {
                    currentobj[prop][arrayIndex] = values[i];
                    continue;
                }
                currentobj[prop][arrayIndex] = {};
                currentobj = currentobj[prop][arrayIndex]; // move pointer down the path

            } else {
                if (isLastKey) {
                    currentobj[prop] = values[i];  // final value assignment
                    continue;
                }

                if (!currentobj[prop]) {
                    currentobj[prop] = {};
                }
                currentobj = currentobj[prop]; // move pointer down the path
            }

        }
    }
    console.log(JSON.stringify(resultObj));
    return resultObj;
}

zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
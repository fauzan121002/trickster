module.exports = (value,...subValues) => {
    if(typeof value == "string") {
        return `${value} ${subValues.join(' ')}`;
    } 

    if(value instanceof Array) {
        return value.concat(subValues);
    }

    if(value == null || value == undefined) {
        return `${value} ${subValues.join(' ')}`;
    }

    if(typeof value == "object") {
        let subObj = subValues.reduce((result,current) => Object.assign(result,current));
        return {
            ...value, ...subObj
        }
    } 

    if(typeof value == "number") {
        return `${value} ${subValues.join(' ')}`;
    } 

    if(typeof value == "boolean") {
        return `${value} ${subValues.join(' ')}`;
    } 
}
function NextInt(min, max) {
    const chance = Math.floor(Math.random() * max) + min;
    return chance;
}

function ValueIsEmpty(value) {
    if (value == undefined || value == null || value == {} || value == "")
        return true;
    return false; 
}

export default {
    NextInt,
    ValueIsEmpty
}
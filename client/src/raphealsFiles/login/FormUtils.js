//Passes in a number, 0-14, returns the valid type.
function InputTypeConverter(integer) {
    /*
    / I understand that this is adding more steps to something simple
    / Just I dont know the types and would like to easily access them based on what I may need
    / This way, I'm forced to view all the types when I want to add a new input and I can learn how each could be used.
    / TLDR - This is useless, BUT, i added it so I can learn the types easier
    */
    let type = "";
    switch (integer) {
        case 0:
            type = "button"
        break;
        case 1:
            type = "password"
        break;
        case 2:
            type = "checkbox"
        break;
        case 3:
            type = "color"
        break;
        case 4:
            type = "date"
        break;
        case 5:
            type = "datetime-local"
        break;
        case 6:
            type = "email"
        break;
        case 7:
            type = "file"
        break;
        case 8:
            type = "month"
        break;
        case 9:
            type = "number"
        break;
        case 10:
            type = "radio"
        break;
        case 11:
            type = "range"
        break;
        case 12:
            type = "reset"
        break;
        case 13:
            type = "search"
        break;
        case 14:
            type = "time"
        break;
        case 15:
            type = "reset"
        break;
        case 16:
            type = "url"
        break;
        case 17:
            type = "week"
        break;
        default:
            type = "text"
        break;
    }

    return type;
}

export default {
    InputTypeConverter
}
// Write a switch that maps a month number (1–12) to its season in Bangladesh. 
let month = 11;

switch (month){
    case 12:
        case 1:
            console.log("Winter");
            break;
            
    case 2:
        case 3:
            console.log("Spring");
            break;
    case 4:
        case 5:
            case 6:
                console.log("Summer");
                break;
    case 7:
        case 8:
            console.log("Monsoon");
            break;
    case 9:
        case 10:
            console.log("Autumn");
            break;
    case 11:
        console.log("Late Autumn");
        break;
    default: 
    console.log("Invalid Month");
}

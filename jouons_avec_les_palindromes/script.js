let maxDaysInMonth = [{
    "01": '31',
    "02": '29',
    "03": '31',
    "04": '30',
    "05": '31',
    "06": '30',
    "07": '31',
    "08": '31',
    "09": '30',
    "10": '31',
    "11": '30',
    "12": '31',
}]
function isValidDate(dateinString){
    let elements = dateinString.split('')
    let day = elements[0]
    day += elements[1]
    // console.log(day)
    let month = elements[3]
    month +=elements[4]
    // console.log(month)
    let year = elements[6]
    year += elements[7]
    year+= elements[8]
    year+= elements[9]
    // console.log(year)
    // while(i<maxDaysInMonth.length){
    if(year>999 && year<=9999 && month>0 && month<=12 && day>0 && day<=31 && elements[2],elements[5] === "/"){
        console.log(true)
    }else{
    console.log(false)
    }
}
isValidDate("18/02/2001")

// faire un tableau avec mes mois et les joursMax puis boucler sur ce tableau en cherchant le mois associé et puis comparant mon jour avec le max de jour dans ce mois

// function isValidDate(dateinString){
//     let date = new Date(dateinString);
//     // les 2 prochaines lignes c'était seulement pour tester
//     dateinString += date.toLocaleDateString
//     // let datelocale = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//     console.log(date)
//     console.log(date.toLocaleDateString());
//     console.log(date.getDate());
//     console.log(date.getMonth()+1);
//     console.log(date.getFullYear());
//     if(date.getFullYear()>999 && date.getFullYear()<=9999 && date.getMonth()+1>0 && date.getMonth()+1<=12 && date.getDate()>0 && date.getDate()<=31){
//         console.log(true)
//     }else{
//         console.log(false)
//     } 
// }
// isValidDate("03/11/2001")

//séparer(split) le jour, mois et année et les transformer dans le format jj/mois/année
//prendre la chaine de caractère l'a destrucuturé, les 3 éléments les transformant en entier et pas en string puis new Date des éléments dans le bon ordre, si ça plante => try catch

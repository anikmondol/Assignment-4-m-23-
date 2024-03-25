function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Invalid Number';
    } else {
        const ticketPrice = 120;
        const totalCost = 500 + (8 * 50);

        const result = (ticketPrice * ticketSale) - totalCost;

        return result;
    }


}


function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    } else {

        if (name[name.length - 1].toLowerCase().includes('a') || name[name.length - 1].toLowerCase().includes('e') || name[name.length - 1].toLowerCase().includes('i') || name[name.length - 1].toLowerCase().includes('o') || name[name.length - 1].toLowerCase().includes('u') || name[name.length - 1].toLowerCase().includes('w') || name[name.length - 1].toLowerCase().includes('y')) {
            return 'Good Name'
        } else {
            return 'Bad Name'
        }
    }
}








function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    } else {
        let newArray = [];
        for (let item of array) {
            if (typeof item === 'number') {
                if (!isNaN(item)) {
                    newArray.push(item)
                    continue
                }
            }
        }
        return newArray;
    }
}





function password(obj) {
    if (typeof obj !== 'object') {
        return 'give me object'
    } else if (typeof obj.name === 'undefined' || typeof obj.birthYear === 'undefined' || typeof obj.siteName === 'undefined') {
        return 'invalid';
    } else if (obj.birthYear < 999) {
        return 'invalid';
    }
    else {

        const word = obj.siteName.split(' ');
        for (let i = 0; i < word.length; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].substring(1);
        }


        const newSen = `${word}#${obj.name}@${obj.birthYear}`;
        return newSen;
    }
}







function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    } else {
        let sum = 0;
        
        for (let item of arr) {
            
            if(item <= 3000){
                item - (item * (100 / 20))
            }
            sum += item;
        };
        if(sum > livingCost){
            const result = sum - livingCost;
            return result;
        }else{
            return 'earn more';
        }
    }

}




const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";





function kata1() {

    let header = document.createElement('div')
    header.innerText = 'Kata - 01'
    document.body.appendChild(header)

    let line_results = document.createElement('p')
    line_results.innerText = JSON.stringify(gotCitiesCSV)
    document.body.appendChild(line_results)
}

kata1()


function kata2() {



    let header = document.createElement('div')
    header.innerText = ' Kata - 02'
    document.body.appendChild(header)

    let line_results = document.createElement('p')
    line_results.innerText = JSON.stringify(bestThing)
    document.body.appendChild(line_results)

}

kata2()


function kata3() {

    let new_array_got = gotCitiesCSV.replace(/,/g,';')
    
   
    let header = document.createElement('div')
    header.innerText = 'Kata - 03'
    document.body.appendChild(header)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(new_array_got)
    document.body.appendChild(line_results)

}

kata3()


function kata4(){

 

    let header = document.createElement('div')
    header.innerText = 'Kata - 04'
    document.body.appendChild(header)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)




}

kata4()


function kata5(){

    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata - 05'
    document.body.appendChild(header)

    for(let i = 0; i<5; i++){
        results.push(lotrCitiesArray[i])
    }

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)




}

kata5()


function kata6(){

    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata - 06'
    document.body.appendChild(header)

    for(let i =lotrCitiesArray.length-1 ; i>=3; i--){
        results.push(lotrCitiesArray[i])
    }

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)




}
kata6()

function kata7(){

    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata - 07'
    document.body.appendChild(header)

    for(let i = 2; i<5; i++){
        results.push(lotrCitiesArray[i])
    }

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)




}

kata7()


function kata8(){


    let header = document.createElement('div')
    header.innerText = 'Kata - 08'
    document.body.appendChild(header)

    lotrCitiesArray.splice(2,1)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    




}
kata8()


function kata9(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 09'
    document.body.appendChild(header)

    lotrCitiesArray.splice(4,8)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    


}
kata9()


function kata10(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 10'
    document.body.appendChild(header)

    lotrCitiesArray.splice(2,0, 'Rohan')

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    


}
kata10()


function kata11(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 11'
    document.body.appendChild(header)

    lotrCitiesArray.splice(5,0, 'Deadest Marshes')

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    


}
kata11()

function kata12(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 12'
    document.body.appendChild(header)

    let results =  bestThing.slice(0,14, 'Deadest Marshes')

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)
    


}
kata12()

function kata13(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 13'
    document.body.appendChild(header)

    let results =  bestThing.slice(bestThing.length-12,bestThing.length,)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)
    

    
}
kata13()

function kata14(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 14'
    document.body.appendChild(header)

    let results =  bestThing.slice(22,38)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)
    

    
}
kata14()

function kata15(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 15'
    document.body.appendChild(header)

    let results =  bestThing.substring(bestThing.length-12)
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)
    

    
}
kata15()

function kata16(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 16'
    document.body.appendChild(header)

    let results =  bestThing.substring(22,38)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)
    

    
}
kata16()

function kata17(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 17'
    document.body.appendChild(header)

    lotrCitiesArray.pop()

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    

    
}
kata17()

function kata18(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 18'
    document.body.appendChild(header)

    lotrCitiesArray.push('Deadest Marshes')

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    

    
}
kata18()

function kata19(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 19'
    document.body.appendChild(header)

    lotrCitiesArray.shift()

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    

    
}
kata19()

function kata20(){

    let header = document.createElement('div')
    header.innerText = 'Kata - 20'
    document.body.appendChild(header)

    lotrCitiesArray.unshift('Mordor')

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)
    

    
}
kata20()
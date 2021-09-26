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


function bonusUm(){

    let new_best = bestThing.split(' ')

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 01'
    document.body.appendChild(header)

    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(new_best.indexOf('only'))
    document.body.appendChild(line_results)


}

bonusUm()

function bonusDois(){

    let new_best = bestThing.split(' ')

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 02'
    document.body.appendChild(header)

    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(new_best.length-1)
    document.body.appendChild(line_results)


}
bonusDois()


function bonustres(){

    let new_got= gotCitiesCSV.split(',')
    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 03'
    document.body.appendChild(header)
    
    const regex = /[a][a]|[e][e]|[i][i]|[o][o]|[u][u]/
  

    for (let i = 0; i < new_got.length; i++){

        if(regex.test(new_got[i])==true)
        
            results.push(new_got[i])
        

    }
    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)


}
bonustres()


function bonusquatro(){

    
    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 04'
    document.body.appendChild(header)
    
    const regex = /or$/
  

    for (let i = 0; i < lotrCitiesArray.length; i++){

        if(regex.test(lotrCitiesArray[i])==true)
        
            results.push(lotrCitiesArray[i])
        

    }
    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)


}
bonusquatro()


function bonusCinco(){

    let new_best = bestThing.split(' ')
    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 05'
    document.body.appendChild(header)

    const regex = /^b/

    for (let i = 0; i < new_best.length; i++){

        if(regex.test(new_best[i])==true)
        
            results.push(new_best[i])
        

    }

    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)


}
bonusCinco()



function bonusSeis(){

    
    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 06'
    document.body.appendChild(header)
    
    const regex = /Mirkwood/
  

    
        results.push(regex.test(lotrCitiesArray))
        
            

    
    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)


}
bonusSeis()

function bonusSete(){

    
    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 07'
    document.body.appendChild(header)
    
    const regex = /Hollywood/
  

    
        results.push(regex.test(lotrCitiesArray))
        
            

    
    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)


}
bonusSete()



function bonusOito(){

   

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 08'
    document.body.appendChild(header)

    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray.indexOf('Mirkwood'))
    document.body.appendChild(line_results)


}
bonusOito()

// Escreva uma função que encontre e retorne a primeira cidade do array 'lotrCitiesArray' que tiver mais de uma palavra. Lembre-se de também adicionar os resultados à página.

function bonusNove(){

    let results = []

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 09'
    document.body.appendChild(header)

    const regex = /\s/g


    for(let i = 0; i < lotrCitiesArray.length;i++){
        
        if (regex.test(lotrCitiesArray[i])){
            results.push(lotrCitiesArray[i])
        }
        
    }

    
    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)


}
bonusNove()

function bonusDez(){

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 10'
    document.body.appendChild(header)

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray.reverse())
    document.body.appendChild(line_results)

    
}
bonusDez()


function bonusOnze(){

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 11'
    document.body.appendChild(header)

    lotrCitiesArray.sort();

    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(lotrCitiesArray)
    document.body.appendChild(line_results)

    
}
bonusOnze()



function bonusDoze(){

    let header = document.createElement('div')
    header.innerText = 'Kata Bônus - 12'
    document.body.appendChild(header)

    lotrCitiesArray.sort();

    let results = []

    for(let i = 0; i<lotrCitiesArray.length;i++){

        for(let j = i+1; j<lotrCitiesArray.length;j++){

            if(!lotrCitiesArray[i].includes(results) && lotrCitiesArray[i]<=lotrCitiesArray[j]){
                results.push(lotrCitiesArray[i])
            }else{results.push(lotrCitiesArray[j])}
        }
    }


    let line_results = document.createElement('p')
    line_results.innerText =  JSON.stringify(results)
    document.body.appendChild(line_results)

    console.log(results)
    
}
bonusDoze()
const callHistoryData = []


// call-btn-1
document.getElementById('call-btn-1').addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling National Emergency Service 999...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'জাতীয় জরুরি সেবা',
        pName: '999', 
        date: new Date().toLocaleTimeString()
    }


    callHistoryData.push(history)
    // console.log(callHistoryData)
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ''

    for(const history of callHistoryData){
        const div = document.createElement('div')
        div.innerHTML = `
            <div  class="flex  justify-between items-center p-4 mt-4 rounded-xl bg-white shadow-xl">
                <div>
                    <h1>${history.name}</h1>
                    <p>${history.pName}</p>
                </div>
                <div>
                    <p>${history.date}</p>
                </div>
            </div>
        `
        historyContainer.appendChild(div)
    }
    
})



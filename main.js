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


// call-btn-2
document.getElementById('call-btn-2').addEventListener('click', function(){
        const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Police Service 999...')


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


// call-btn 3
document.getElementById('call-btn-3').addEventListener('click', function(){
            const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Fire Service Service 999...')


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


// call-btn 4
document.getElementById('call-btn-4').addEventListener('click', function(){
            const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Ambulance Service 1994-999999...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'অ্যাম্বুলেন্স',
        pName: '1994-999999', 
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

// call-btn-5
document.getElementById('call-btn-5').addEventListener('click', function(){
        const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Women & Child Helpline Service 109...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'নারী ও শিশু সহায়তা',
        pName: '109', 
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


// call-btn-6
document.getElementById('call-btn-6').addEventListener('click', function(){
        const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Anti-Corruption Service 106...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'দুদক',
        pName: '106', 
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


// call-btn-7
document.getElementById('call-btn-7').addEventListener('click', function(){
        const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Electricity Outage Service 16216...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'বিদ্যুৎ বিভ্রাট',
        pName: '16216', 
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

// call-btn-8
document.getElementById('call-btn-8').addEventListener('click', function(){
        const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Brac Bank Service 16445...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'ব্র্যাক',
        pName: '16445', 
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


// call-btn-9
document.getElementById('call-btn-9').addEventListener('click', function(){
        const coin = parseInt(document.getElementById('coin').innerText)
    
    if(coin < 20 ){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।')
        return
    }
    

    alert('📞 Calling Bangladesh Railway Service 163...')


    const coinMynas =  coin - 20
    document.getElementById('coin').innerText = coinMynas

    const history = {
        name: 'বাংলাদেশ রেলওয়ে',
        pName: '163', 
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
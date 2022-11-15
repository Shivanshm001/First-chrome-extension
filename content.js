chrome.runtime.onMessage.addListener((message,sender,response)=>{
    console.log(message);
    if(message){
        alert(document.title)
    }
})
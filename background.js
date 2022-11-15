chrome.action.onClicked.addListener((tab) => {
    console.log(tab);
    console.log("clicked")

    if (tab.url) {
        sendMessage()
    }
})

async function sendMessage() {
    try {
        await chrome.tabs.sendMessage(tab.id, {
            clicked: true
        })
        console.log("sent");
    } catch (error) {
        console.log(error)
    }
}
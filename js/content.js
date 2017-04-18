hideit(localStorage.getItem('which'));

function hideit(hide){
    var list = document.getElementsByClassName("taskHeader clickable label-success");
    var arr = Array.prototype.slice.call( list )
    arr.forEach(myFunction);
    function myFunction(item, index) {
        item.parentElement.style.display = hide;
    }
}

window.chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'find-stories') {
        var which;
        if (localStorage.getItem('which') === 'none') {
            which_get = '';
            which_set = '';
        } else {
            which_get = 'none';
            which_set = 'none';
        }
        hideit(which_get);
        localStorage.setItem('which', which_set);
    } else if (msg.text === 'v3:find-stories') {
        var list = document.getElementsByClassName("label-success");
    }
})

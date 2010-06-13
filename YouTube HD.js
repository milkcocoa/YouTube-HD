safari.self.addEventListener('message', function(event) {
    // Receive the parameter from Global Page
    var parameter = event.message;
    if (document.URL.indexOf("&fmt=") == -1) {
        location.replace(document.URL + "&fmt=" + parameter);
    }
}, false);

// Query Global Page about a parameter
safari.self.tab.dispatchMessage('Query Parameter', '');

function goToHomePage() {
    document.getElementById("content");
}

function goToAboutPage() {
    document.getElementById("content");
}

function goToDiscussionPage() {
    document.getElementById("content").innerHTML = "<h2>Discussion Page</h2><p>Welcome to the Discussion page of CyBlog. Feel free to engage in discussions!</p>";
}


// Load Home Page by default
goToHomePage();

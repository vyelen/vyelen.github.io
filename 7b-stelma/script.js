document.addEventListener('load', () => {
    document.querySelector(".sidebar input").checked = false;
    document.querySelector(".sidebar a").style.display = "none";
    document.querySelector(".sidebar i").style.display = "none";
});

const toggleMenu = async () => {
    const toggle = document.querySelector(".sidebar input");
    const sidebar = document.querySelector(".sidebar");
    const links = document.querySelector(".sidebar a");
    const icons = document.querySelector(".sidebar i");

    switch (toggle.checked) {
        
        case false:
            sidebar.style.width = "40px";
            links.style.display = "none";
            icons.style.display = "none";
            sidebar.style.overflow = "hidden";
            break;

        case true:
            sidebar.style.width = "200px";
            sidebar.style.overflow = "auto";
            links.style.display = "block";
            icons.style.display = "block";
            menuIcon.style.background = "var(--white);";
            break;
    }
};
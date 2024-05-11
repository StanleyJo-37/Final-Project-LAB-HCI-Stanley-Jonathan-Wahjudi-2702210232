// Scroll interaction with navbar

let navbar = document.getElementById('navbar');
document.addEventListener('scroll', () => navbar.style.opacity = "0.5");
document.addEventListener('scrollend', () => navbar.style.opacity = "1.0");
navbar.addEventListener('scroll', () => navbar.style.opacity = "0.5");
navbar.addEventListener('scrollend', () => navbar.style.opacity = "1.0");

// Hamburger Icon and Navbar Expansion

let navbarChoices = document.getElementById('navbar-choices');
let hamburgerIcon = document.getElementById('hamburger-icon');
let dropDownFlag = 0;

hamburgerIcon.addEventListener('click', () => {
    if (dropDownFlag)
    {
        navbarChoices.style.display = "none";
        document.body.classList.remove('noscroll');
    }
    else
    {
        navbarChoices.style.display = "block";
        document.body.classList.add('noscroll');
    }
    
    for (const node of hamburgerIcon.childNodes)
    {
        if (node.nodeType === 1)
        {
            if (!dropDownFlag) node.classList.add('line-active');
            else node.classList.remove('line-active');
        }
    }
    dropDownFlag ^= 1;
});
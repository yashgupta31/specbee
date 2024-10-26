const speakers = [
    {
        name: "John Doe",
        role: "Chief Marketing Officer",
        company: "Acme Corp",
        image: "https://learn-attachment.microsoft.com/api/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg?platform=QnA"
    },
    {
        name: "Jane Smith",
        role: "Lead Developer",
        company: "Tech Innovations",
        image: "https://i.pinimg.com/originals/e5/3c/6b/e53c6bfa45da3f684fda60c4b21b1307.jpg"
    },
    {
        name: "Michael Johnson",
        role: "Product Manager",
        company: "Creative Solutions",
        image: "https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
    },
    {
        name: "Emily Davis",
        role: "UX/UI Designer",
        company: "Design Co.",
        image: "https://i0.wp.com/www.fredericpaulussen.be/wp-content/uploads/2020/08/Portrait-photography-in-Antwerp.jpg?resize=1536%2C1024&ssl=1"
    },
    {
        name: "James Wilson",
        role: "Data Scientist",
        company: "Analytics Inc.",
        image: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
    },
    {
        name: "Mary Brown",
        role: "Software Engineer",
        company: "Code Factory",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Robert Jones",
        role: "Chief Executive Officer",
        company: "Business Solutions",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Linda Garcia",
        role: "Marketing Specialist",
        company: "Brand Agency",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "David Martinez",
        role: "Sales Director",
        company: "Sales Group",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Jennifer Taylor",
        role: "HR Manager",
        company: "People First",
        image: "https://via.placeholder.com/150"
    },
    // {
    //     name: "William Anderson",
    //     role: "Network Engineer",
    //     company: "Tech Network",
    //     image: "https://via.placeholder.com/150"
    // },
    // {
    //     name: "Patricia Thomas",
    //     role: "Content Strategist",
    //     company: "Creative Content",
    //     image: "https://via.placeholder.com/150"
    // },
    // {
    //     name: "Charles Jackson",
    //     role: "System Analyst",
    //     company: "IT Solutions",
    //     image: "https://via.placeholder.com/150"
    // },
    // {
    //     name: "Elizabeth White",
    //     role: "Digital Marketing Manager",
    //     company: "Digital Agency",
    //     image: "https://via.placeholder.com/150"
    // },
    // {
    //     name: "Daniel Harris",
    //     role: "Software Architect",
    //     company: "Architecture Inc.",
    //     image: "https://via.placeholder.com/150"
    // },
    // {
    //     name: "Jessica Lewis",
    //     role: "Customer Success Manager",
    //     company: "Customer Care",
    //     image: "https://via.placeholder.com/150"
    // },
    // {
    //     name: "Matthew Young",
    //     role: "Mobile App Developer",
    //     company: "App Innovators",
    //     image: "https://via.placeholder.com/150"
    // }
];

const showPopup = (name, role, company, image) => {
    // alert(name)
    // const popupContainer= document.getElementById('container__popoverParent');
    const popoverContainer = document.getElementById('container__popoverParent');
    popoverContainer.innerHTML = `
   <section class="container__popover" id="container__popover">
                <section class="container__popover-leftContainer">
                <div class="container__popover-imgbox">
                    <img class="container__popover-image"
                        src=${image}
                        alt="this is image of user">
                </div>
                <section class="container__popover-detail">
                    <h3 class="container__popover-name">${name}</h3>
                    <p class="container__popover-role">${role}</p>
                    <p class="container__popover-company">${company}</p>
                    <span class="container__popover-logos">
                        <i class="fa-brands fa-drupal"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </span>
                </section>
                </section>
                <span class="container__popover-verticalline"></span>
                <p class="container__popover-para">
                    Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.
                </p>
    
                <i class="fa-solid fa-xmark" onclick="closePopover()"></i>
    
            </section>
   `
    //    popoverContainer.style.opacity= '100%';
    //    popoverContainer.style.visibility= "visible"; 
    //    popoverContainer.style.transition= '1s'

    popoverContainer.style.opacity = 1;
    popoverContainer.style.visibility = "visible";
}

const closePopover = () => {
    const popoverContainer = document.getElementById('container__popoverParent');
    const popoverChild = document.getElementById('container__popover')
    // popoverChild.height= '0px';

    // popoverContainer.style.opacity=0;
    // popoverContainer.style.height= '0px';

    popoverContainer.style.opacity = 0;
    popoverContainer.style.visibility = "hidden";
    setTimeout(() => {
        popoverContainer.innerHTML = ''
    }, 250);

}


const renderSpeakers = () => {
    const speakerContainer = document.getElementById('speakerContainer');
    speakerContainer.innerHTML = '';

    speakers.forEach((speaker) => {
        const speakerHTML = `
    <section class="speaker" onclick="showPopup('${speaker.name}', '${speaker.role}', '${speaker.company}', '${speaker.image}' )"> 
                <div class="speaker__imgbox">
                    <img class="speaker__image" src=${speaker.image} alt="this is image of user">
                </div>
                <h3 class="speaker__name">${speaker.name}</h3>
                <p class="speaker__role">${speaker.role}</p>
                <p class="speaker__company">${speaker.company}</p>
            </section>`

        speakerContainer.innerHTML += speakerHTML
    })

}



renderSpeakers()


const speakerContainer = document.getElementById('speakerContainer');


// Scroll function that accepts a direction parameter
let scroll = (direction) => {
    // const scrollContainer = document.querySelector('.scroll-container');
    const scrollAmount = 283; // Amount to scroll with each click

    if (direction === 'right') {
        speakerContainer.scrollLeft += scrollAmount;
    } else if (direction === 'left') {
        speakerContainer.scrollLeft -= scrollAmount;
    }

    speakerContainer.style.scrollBehavior = 'smooth';
};

// Attach event listeners to the left and right buttons
document.querySelector('.slider__rightbtn').addEventListener('click', function () {
    scroll('right');
});

document.querySelector('.slider__leftbtn').addEventListener('click', function () {
    scroll('left');
});
// // / Update the slide position
// const updateSlidePosition = () => {
//     // document.querySelector('.speaker').style.transform = `translateX(-${currentSlide * cardWidth}px)`;
//     speakerContainer.scrollLeft += 530;
//     speakerContainer.style.scrollBehavior = 'smooth'
// };

// // Left button click
// document.querySelector('.slider__leftbtn').addEventListener('click', () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateSlidePosition();
//     }
// });

// // Right button click
// document.querySelector('.slider__rightbtn').addEventListener('click', () => {
//     const totalCards = speakers.length;
//     const maxSlide = totalCards - Math.floor(document.querySelector('.container__slider').offsetWidth / cardWidth);
//     if (currentSlide < maxSlide) {
//         currentSlide++;
//         updateSlidePosition();
//     }
// });
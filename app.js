const reviews = [
    // make your own content here
    {
        name: "Pikachu iPhone Case",
        img: "1st item.jpg",
        description: "Only for the iPhone Pro 11, this case will be the best choice.",
        stars: 4,
        reviewText: "Protect your iPhone from scratches, drops, and dust."
    },
    {
        name: "Detective Pikachu iPhone Case",
        img: "3rdphoto.jpg",
        description: "If you want something cute, get this.",
        stars: 5,
        reviewText: "Our Pikachu iPhone Case is made from premium materials to ensure durability and longevity."
    },
    {
        name: "Grip Tok",
        img: "3 time.jpg",
        description: "If you want something cute, get this.",
        stars: 5,
        reviewText: "This item helps you to grip your phone more comfortably."
    }
];

const img = document.getElementById('item-img');
const name = document.getElementById('name');
const description = document.getElementById('description');
const stars = document.getElementById('stars');
const reviewText = document.getElementById('reviewText');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set initial item number
let currItem = 0;
// ...

// Function to show an item based on its index
function showItem(itemNum) {
    if (itemNum < 0) {
        itemNum = reviews.length - 1;
    } else if (itemNum >= reviews.length) {
        itemNum = 0;
    }

    const item = reviews[itemNum];
    img.src = item.img;
    name.textContent = item.name;
    description.textContent = item.description;
    while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
    }
    const fragment = new DocumentFragment();
    for (let j = 0; j < item.stars; j++) {
        const i = document.createElement("span");
        i.textContent = "star";
        i.className = "material-icons";
        fragment.append(i);
    }
    stars.append(fragment);

    reviewText.textContent = item.reviewText;

    currItem = itemNum;
}

// Load initial item on page load
window.addEventListener('DOMContentLoaded', () => {
    showItem(currItem);
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    currItem++;
    showItem(currItem);
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    currItem--;
    showItem(currItem);
});

// Event listener for the "Surprise Me" button
randomBtn.addEventListener('click', () => {
    const randomItemNum = Math.floor(Math.random() * reviews.length);
    showItem(randomItemNum);

    // Update the "Current Item" text
    document.getElementById('item-value').textContent = randomItemNum + 1; // Adding 1 to start from 1, not 0.
});

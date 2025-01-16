// Modal handling (Login/Signup)
const loginBtn = document.getElementById('loginBtn'); // Get the login button element
const authModal = document.getElementById('authModal'); // Get the authentication modal element
const signupToggle = document.getElementById('signupToggle'); // Get the signup toggle button element
const loginToggle = document.getElementById('loginToggle'); // Get the login toggle button element
const loginForm = document.getElementById('loginForm'); // Get the login form element
const signupForm = document.getElementById('signupForm'); // Get the signup form element
const closeBtn = document.querySelector('.close-btn'); // Get the close button element

// Open Login Modal
loginBtn.addEventListener('click', () => {
  authModal.style.display = 'flex'; // Display the authentication modal
  loginForm.style.display = 'block'; // Display the login form
  signupForm.style.display = 'none'; // Hide the signup form
});

// Close Modal
closeBtn.addEventListener('click', () => {
  authModal.style.display = 'none'; // Hide the authentication modal
});

// Switch to Signup Form
signupToggle.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default form submission
  loginForm.style.display = 'none'; // Hide the login form
  signupForm.style.display = 'block'; // Display the signup form
});

// Switch to Login Form
loginToggle.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default form submission
  loginForm.style.display = 'block'; // Display the login form
  signupForm.style.display = 'none'; // Hide the signup form
});

// Handle Login
function login() {
  const username = document.getElementById('loginUsername').value; // Get the username value from the login form
  const password = document.getElementById('loginPassword').value; // Get the password value from the login form

  // Simple validation (can be replaced with actual API logic)
  if (username && password) {
    alert('Login Successful'); // Show success alert
    authModal.style.display = 'none'; // Hide the authentication modal
  } else {
    alert('Please fill in both fields'); // Show error alert
  }
}

// Handle Sign-Up
function register() {
  const username = document.getElementById('signupUsername').value; // Get the username value from the signup form
  const password = document.getElementById('signupPassword').value; // Get the password value from the signup form
  const confirmPassword = document.getElementById('confirmPassword').value; // Get the confirm password value from the signup form

  if (username && password && password === confirmPassword) {
    alert('Account Created Successfully'); // Show success alert
    authModal.style.display = 'none'; // Hide the authentication modal
  } else {
    alert('Please check your inputs'); // Show error alert
  }
}

// Voting Functionality
const voteButtons = document.querySelectorAll('.vote-now'); // Get all vote buttons

voteButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const vote = e.target.dataset.vote; // Get the vote data from the button
    alert(`You voted for: ${vote}`); // Show vote alert
    // Add logic for storing vote (could be in local storage, API, etc.)
  });
});

// Sorting Polls (Placeholder logic)
const sortBtn = document.getElementById('sortBtn'); // Get the sort button element

sortBtn.addEventListener('click', () => {
  alert('Sorting Polls...'); // Show sorting alert
  // Add sorting functionality (e.g., by deadline, popularity, etc.)
});

// Search Polls
const searchBar = document.querySelector('.search-bar'); // Get the search bar element

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase(); // Get the search query and convert to lowercase
  const pollCards = document.querySelectorAll('.poll-card'); // Get all poll card elements

  pollCards.forEach(card => {
    const pollTitle = card.querySelector('h3').textContent.toLowerCase(); // Get the poll title and convert to lowercase
    if (pollTitle.includes(query)) {
      card.style.display = 'block'; // Display the poll card if it matches the query
    } else {
      card.style.display = 'none'; // Hide the poll card if it doesn't match the query
    }
  });
});

// User Profile Logic (Placeholder)
const voteHistory = document.getElementById('voteHistory'); // Get the vote history element
const userVotes = [
  'Community Park Design', // Example vote
  'Favorite Local Charity', // Example vote
];

userVotes.forEach(vote => {
  const listItem = document.createElement('li'); // Create a new list item element
  listItem.textContent = vote; // Set the text content of the list item
  voteHistory.appendChild(listItem); // Append the list item to the vote history
});

// Function to Logout (Placeholder)
function logout() {
  alert('You have logged out!'); // Show logout alert
  // Add your logout logic (clear session, redirect, etc.)
  // Clear session storage
  sessionStorage.clear(); // Clear session storage
  
  // Clear local storage
  localStorage.clear(); // Clear local storage
  
  // Redirect to the login page
  window.location.href = 'login.html'; // Redirect to the login page
}
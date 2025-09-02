/* === Theme Toggle === */
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Welcome Message
    const welcomeBtn = document.getElementById('welcomeBtn');
    const nameInput = document.getElementById('nameInput');
    const welcomeMessage = document.getElementById('welcomeMessage');

    function showWelcome() {
      const name = nameInput.value.trim();
      if(name){
        welcomeMessage.textContent = `Hello, ${name}! Welcome to your dashboard.`;
      } else {
        welcomeMessage.textContent = 'Please enter your name.';
      }
    }
    welcomeBtn.addEventListener('click', showWelcome);
    nameInput.addEventListener('keypress', (e) => {
      if(e.key === 'Enter') {
        e.preventDefault();
        showWelcome();
      }
    });

    // Counter 
    let count = 0;
    const countValue = document.getElementById('countValue');
    document.getElementById('increment').addEventListener('click', () => {
      count++;
      countValue.textContent = count;
    });
    document.getElementById('decrement').addEventListener('click', () => {
      count--;
      countValue.textContent = count;
    });

    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach((q) => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });

    // Dropdown
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownBtn.addEventListener('click', () => {
      dropdownContent.style.display = 
        dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Form Validation
    const form = document.getElementById('userForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // stop form submission
      let valid = true;

      // Name
      if(username.value.trim() === ""){
        document.getElementById('usernameError').textContent = "Name is required.";
        valid = false;
      } else {
        document.getElementById('usernameError').textContent = "";
      }

      // Email (simple regex)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!email.value.match(emailPattern)){
        document.getElementById('emailError').textContent = "Enter a valid email.";
        valid = false;
      } else {
        document.getElementById('emailError').textContent = "";
        
      }

      // Password
      const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
      if(!password.value.match(passwordPattern)){
        document.getElementById('passwordError').textContent = "Password must be 8+ chars with a number & special character.";
        valid = false;
      } else {
        document.getElementById('passwordError').textContent = "";
      }

      // Confirm Password
      if(password.value !== confirmPassword.value){
        document.getElementById('confirmError').textContent = "Passwords do not match.";
        valid = false;
      } else {
        document.getElementById('confirmError').textContent = "";
      }

      if(valid){
        formSuccess.textContent = "Account created successfully!";
        form.reset();
      } else {
        formSuccess.textContent = "";
      }
    });
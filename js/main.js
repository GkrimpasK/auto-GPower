const authBtn = document.querySelector("#auth-btn");

const authWindowBackground = document.querySelector("#auth-window-background");
const authWindow = document.querySelector("#auth-window");

const loginWindow = document.querySelector("#login-window");
const registerWindow = document.querySelector("#register-window");

const loginHint = document.querySelector("#login-hint");
const signupHint = document.querySelector("#register-hint");

const closeAuthBtn = document.querySelector("#close-auth");

const underline = document.querySelector("#underline");

let isOpen = false;

authBtn.addEventListener('click', () => {
	
	if ( !isOpen ) {

		authWindowBackground.classList.remove('hidden');

	} else {
		
		authWindowBackground.classList.add('hidden');
		
	}
	
	isOpen = !isOpen;
	
});

closeAuthBtn.addEventListener('click', () => {
	
	authWindowBackground.classList.add('hidden');
	
	isOpen = false;
	
});

const showSignup = () => {
	loginWindow.classList.add('hidden');
	registerWindow.classList.remove('hidden');
	underline.classList.add('pushed-right');
}

const showLogin = () => {
	loginWindow.classList.remove('hidden');
	registerWindow.classList.add('hidden');
	underline.classList.remove('pushed-right');
}

loginHint.addEventListener('click', showSignup);

signupHint.addEventListener('click', showLogin);

const params = new URLSearchParams(window.location.search);

    if(params.get('error')  ){

		authWindowBackground.classList.remove('hidden');

		if(params.get('error') === 'Lemptyinput'){
			showLogin();
		}
		if(params.get('error')[0] === 'S'){
			showSignup();
		}

			if(params.get('error') === 'Lemptyinput'){

				showLogin();

				document.querySelector('#login-error').textContent = 'Συμπλήρωσε όλα τα κενά!';
				document.querySelector('#login-name').classList.add('input-error');
				document.querySelector('#login-pswd').classList.add('input-error');
			}
			if(params.get('error') === 'Lwronglogin'){

				showLogin();

				document.querySelector('#login-error').textContent = 'Λάθος όνομα';
				document.querySelector('#login-name').classList.add('input-error');
			}
			if(params.get('error') === 'Lwrongpassword'){

				showLogin();

				document.querySelector('#login-error').textContent = 'Λάθος κωδικός';
				document.querySelector('#login-pswd').classList.add('input-error');
			}

			//

			if(params.get('error') === 'Semptyinput'){

				showSignup();

				document.querySelector('#signup-error').textContent = 'Συμπλήρωσε όλα τα κενά!';
				document.querySelector('#signup-name').classList.add('input-error');
				document.querySelector('#signup-email').classList.add('input-error');
				document.querySelector('#signup-pswd').classList.add('input-error');
				document.querySelector('#signup-rpswd').classList.add('input-error');

			}
			if(params.get('error') === 'Sinvaliduid'){

				document.querySelector('#signup-error').textContent = 'Μη έγκυρο όνομα!';
				document.querySelector('#signup-name').classList.add('input-error');

			}
			if(params.get('error') === 'Sinvalidemail'){

				document.querySelector('#signup-error').textContent = 'Μη έγκυρο email!';
				document.querySelector('#signup-email').classList.add('input-error');

			}
			if(params.get('error') === 'Snotmatchingpasswords'){

				document.querySelector('#signup-error').textContent = 'Οι κωδικοί δεν ταιριάζουν!';
				document.querySelector('#signup-pswd').classList.add('input-error');
				document.querySelector('#signup-rpswd').classList.add('input-error');

			}
			if(params.get('error') === 'Snametaken'){

				document.querySelector('#signup-error').textContent = 'Το όνομα είναι δεσμευμένο!';
				document.querySelector('#signup-name').classList.add('input-error');

			}

    }
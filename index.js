onst sendForm = () => {
  const submitBtn = document.querySelector("#submitBtn")
  const message = document.querySelector('#form-message').value
  const username = document.querySelector("#form-name").value
  const email = document.querySelector("#form-email").value

  if(message  && username && email ) {
    alert(`Thanks for the message, ${username}. We will get in touch soon!`)
  } else if (username === "" || email === "") {
    alert('Uhm...something is missing. Please check your form again.');
    submitBtn.disable = true;
  } else if (message !== " " && username !== " " && message === "") {
      alert('Looks like your message is empty. Please try again.')
      submitBtn.disable = true;
    } else {
    submitBtn.disable = false;
  }
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  sendForm()
})

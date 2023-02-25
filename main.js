function tGENERATOR() {
    document.querySelector('#qr-img').style.display = "block";
    let qrText = document.querySelector('#text').value.trim(); // Fix: remove extra equals sign and add .value.trim() to remove whitespace
  
    if (qrText.length === 0) { // Fix: use triple equals for comparison and remove parentheses
      document.querySelector('#qr-img .error').innerHTML = 'Please enter text.'; // Fix: fix typo in error message
      document.querySelector('#img').style.display = 'none'; // Fix: add quotes around 'none'
    } else {
      document.querySelector('#img').style.display = 'block'; // Fix: add quotes around 'block'
      document.querySelector('#qr-img .error').innerHTML = '';
      document.querySelector('#img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText;
    }
  }
  
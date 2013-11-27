
$(function(){
	$('.signup-form').submit(function(){
		var signupForm = $(this);
		var addrInput = signupForm.find('input[name="addr"]');
		var addrValue = addrInput.val();
		var zipInput = signupForm.find('input[name="zip"]');
		var zipValue = zipInput.val();
		var firstInput = signupForm.find('input[name="first"]');
		var firstValue = firstInput.val();
		if (firstValue == 0) {
			alert('First name must be provied');
			return false;
		} else {
			return true;
		}


		if (addrValue == 0) {
			alert('Address must be provided');
			return false;
		} else {
			return true;
		}

		if (zipValue < 5) {
			alert('Zip Code must be provided');
			return false;
		} else {
			return true;
		}
	});

})


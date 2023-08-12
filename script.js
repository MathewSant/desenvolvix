document.addEventListener("DOMContentLoaded", function () {
  const telInput = document.getElementById("telContact");

  formatPhoneNumber(telInput.value);

  telInput.addEventListener("input", function () {
    formatPhoneNumber(this.value);
  });

  function formatPhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    if (cleanedPhoneNumber.length <= 2) {
      telInput.value = cleanedPhoneNumber;
    } else if (cleanedPhoneNumber.length <= 6) {
      telInput.value = `(${cleanedPhoneNumber.slice(
        0,
        2
      )}) ${cleanedPhoneNumber.slice(2)}`;
    } else if (cleanedPhoneNumber.length <= 10) {
      telInput.value = `(${cleanedPhoneNumber.slice(
        0,
        2
      )}) ${cleanedPhoneNumber.slice(2, 6)}-${cleanedPhoneNumber.slice(6)}`;
    } else {
      telInput.value = `(${cleanedPhoneNumber.slice(
        0,
        2
      )}) ${cleanedPhoneNumber.slice(2, 7)}-${cleanedPhoneNumber.slice(7, 11)}`;
    }
  }
});

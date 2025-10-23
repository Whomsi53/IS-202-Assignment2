// Reverse String
function reverseText() {
  let text = document.getElementById("reverseInput").value;
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  document.getElementById("reverseResult").innerText = "Reversed: " + reversed;
}

// Palindrome Check
function checkPalindrome() {
  let text = document.getElementById("palInput").value;
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  if (text === reversed) {
    document.getElementById("palResult").innerText = text + " is a palindrome.";
  } else {
    document.getElementById("palResult").innerText = text + " is not a palindrome.";
  }
}

// Tip Calculation
function calculateTotal() {
  let bill = parseFloat(document.getElementById("billInput").value);
  let tip = parseFloat(document.getElementById("tipInput").value);

  if (isNaN(bill) || isNaN(tip)) {
    document.getElementById("tipResult").innerText = "Please enter valid numbers.";
    return;
  }

  let total = bill + (bill * (tip / 100));
  document.getElementById("tipResult").innerText = "Total (with tip): $" + total.toFixed(2);
}

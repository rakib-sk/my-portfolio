function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var fullMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

  // নিচের নম্বরটি তোমার WhatsApp নম্বর দিয়ে পরিবর্তন করো (Country code সহ, + বাদে)
  var whatsappNumber = "8801828315879";

  var url = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

  window.open(url, '_blank');
}
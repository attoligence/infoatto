const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const phone = document.getElementById("cphone").value.trim();
    const purpose = document.getElementById("cpurpose").value;
    const message = document.getElementById("cmessage").value.trim();

    if (!name || !email || !phone || !purpose || !message) {
      alert("Please fill all required fields.");
      return;
    }

    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Purpose: ${purpose}

Message:
${message}
    `;

    const mailtoLink = `mailto:infoteam@attoligence.com?cc=hrteam@attoligence.com
&subject=Website Enquiry
&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}
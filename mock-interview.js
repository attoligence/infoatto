// ================= SELECT INTERVIEW TYPE =================
document.querySelectorAll(".select-type").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("type").value = button.dataset.type;
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ================= SELECT PLAN =================
document.querySelectorAll(".select-plan").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("plan").value = button.dataset.plan;
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ================= FORM SUBMISSION =================
const mockForm = document.getElementById("mockForm");

if (mockForm) {
  mockForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const type = document.getElementById("type").value;
    const plan = document.getElementById("plan").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const mode = document.getElementById("mode").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !type || !plan || !date || !time || !mode) {
      alert("Please fill all required fields.");
      return;
    }

    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Interview Type: ${type}
Plan: ${plan}
Date: ${date}
Time: ${time}
Mode: ${mode}

Message:
${message}
    `;

    const mailtoLink = `mailto:infoteam@attoligence.com?cc=hrteam@attoligence.com
&subject=Mock Interview Booking
&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}
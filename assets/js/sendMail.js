// document.querySelector(".sendEmail").addEventListener("click", async function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (!name || !email || !message) {
//         alert("Please fill out all fields.");
//         return;
//     }

//     try {
//         const response = await fetch("/send-email", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name, email, message }),
//         });

//         // Get the response as text first for debugging
//         const text = await response.text();  // Use response.text() first
//         console.log('Response Text:', text);  // Log the raw response

//         const result = JSON.parse(text);  // Parse the response manually
//         alert(result.success ? "📧 Email Sent!" : "❌ Failed to send email: " + result.error);
//     } catch (error) {
//         alert("Network Error: " + error.message);
//     }
// });

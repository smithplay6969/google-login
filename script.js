const ipInfoToken = "24a77fbaec722f"; 
const botToken = "7786468021:AAEM6vPtINEuUJ1TQmRz_YOrXsTLR2h4Skc";  
const chatId = "1790665950";  
fetch(`https://ipinfo.io/json?token=${ipInfoToken}`)
    .then(response => response.json())
    .then(data => {
        const ipDetails = `
📌 *New Visitor IP Info* 📌:
🆔 *IP Address:* ${data.ip}
📍 *City:* ${data.city}
🌍 *Region:* ${data.region}
🏴 *Country:* ${data.country}
📌 *Location:* ${data.loc}
🏢 *ISP:* ${data.org}
        `;

        
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: ipDetails,
                parse_mode: "Markdown"
            })
        });
    
        document.getElementById("ip-info").innerHTML = ipDetails.replace(/\n/g, "<br>");
    })
    .catch(error => {
        document.getElementById("ip-info").innerHTML = "Error fetching data";
        console.error("Error:", error);
    });

function enviarWhatsApp() {
    var telefone = "5585991468948"; // Seu número de WhatsApp no formato internacional
    var mensagem = "Gostaria de fazer parte do grupo vip";
    var link = "https://api.whatsapp.com/send/?phone=" + telefone + "&text=" + mensagem + "&type=phone_number&app_absent=0";
    window.location.href = link; // Redireciona para o WhatsApp
}

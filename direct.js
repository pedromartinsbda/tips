function enviarWhatsApp() {
    var nome = document.getElementById("nome").value;
    var telefone = "5585991468948"; // Seu número de WhatsApp no formato internacional
    var mensagem = "Olá, meu nome é " + encodeURIComponent(nome) + ", gostaria de fazer parte do grupo vip";
    var link = "https://api.whatsapp.com/send/?phone=" + telefone + "&text=" + mensagem + "&type=phone_number&app_absent=0";
    window.location.href = link; // Redireciona para o WhatsApp
}

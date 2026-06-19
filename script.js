function orderProduct(productName) {

    const phone = "918815940145";

    const message =
    "Namaste, mujhe ye product order karna hai: " + productName;

    const whatsappURL =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}

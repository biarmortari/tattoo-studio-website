class WhatsAppButton {
  constructor(anchorId, phoneNumber, defaultMessage) {
    this.anchor = document.getElementById(anchorId);
    this.phoneNumber = phoneNumber;
    this.defaultMessage = defaultMessage;
    this.setup();
  }

  setup() {
    const encoded = encodeURIComponent(this.defaultMessage);
    const href = `https://wa.me/${this.phoneNumber}?text=${encoded}`;
    this.anchor.setAttribute("href", href);
  }
}
export default WhatsAppButton;

import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1>📬 Get in Touch</h1>
      <p>We’d love to hear from you — whether you're a fan, a singer, or just curious about Axercute your voice</p>

      <div className="contact-info">
        <div className="contact-block">
          <h2>📧 Email Us</h2>
          <p>axercute@gmail.com</p>
        </div>

        <div className="contact-block">
          <h2>📞 Call Us</h2>
          <p>+65 999</p>
        </div>

        <div className="contact-block">
          <h2>📍 Visit Us</h2>
          <p>General Assembly Block 420 #19-420</p>
        </div>

        <div className="contact-block">
          <h2>📱 Follow Us</h2>
          <p>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a> |{" "}
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a> |{" "}
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

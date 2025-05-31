import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1>📬 Get in Touch</h1>
      <p>We’d love to hear from you — whether you're a fan, a singer, or just curious about StreetStage.</p>

      <div className="contact-info">
        <div className="contact-block">
          <h2>📧 Email Us</h2>
          <p>support@streetstage.app</p>
        </div>

        <div className="contact-block">
          <h2>📞 Call Us</h2>
          <p>+1 (555) 123-4567</p>
        </div>

        <div className="contact-block">
          <h2>📍 Visit Us</h2>
          <p>123 Music Lane, Melody City, World Stage 40400</p>
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

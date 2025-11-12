import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <Container className="footer-links">
        <a href="#">
          <i className="bi bi-house-door fs-4"></i>
        </a>

        <a href="#">
          <i class="bi bi-list fs-4"></i>
        </a>

        <a href="#">
          <i class="bi bi-gear fs-4"></i>
        </a>
      </Container>
    </footer>
  );
}

export default Footer;

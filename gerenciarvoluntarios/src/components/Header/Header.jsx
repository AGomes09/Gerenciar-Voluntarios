import NavBar from "../NavBar/NavBar.jsx";
import Stack from "react-bootstrap/Stack";
import "./header.css";
function Header() {
  return (
    <header>
      <NavBar />
      <Stack direction="horizontal" className="d-block p-0 m-0">
        <div
          className="d-block p-2 text-center"
          style={{ background: "#009951" }}
        >
          <h1 style={{ color: "#FFF" }}>CADASTRO DE VOLUNTÁRIOS</h1>
        </div>
      </Stack>
    </header>
  );
}

export default Header;

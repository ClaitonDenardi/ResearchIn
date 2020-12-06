import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import api from "../../services/api";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [siape, setSiape] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      siape,
    };
    if (email.includes("@inf.ufsm.br" || email.includes("@ufsm.br"))) {
      try {
        const response = await api.post("professors", data);
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push("/");
      } catch (err) {
        alert(
          "Erro ao conectar com a API, envie um email para cdpaulus@inf.ufsm.br se o problema persistir."
        );
      }
    } else {
      alert("Por favor, utilize um e-mail institucional");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section style={{ paddingRight: "2%" }}>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro na plataforma e salve seu ID de acesso em um local
            seguro!
          </p>
          <p>Não esqueça de usar um email institucional.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho Cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome professor(a)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Siape"
            value={siape}
            onChange={(e) => setSiape(e.target.value)}
            required
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

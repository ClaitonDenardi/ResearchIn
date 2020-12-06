import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function NewProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [holder, setHolder] = useState("");
  const professorId = localStorage.getItem("professorId");
  const history = useHistory("");

  async function handleNewProject(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      holder,
    };

    try {
      await api.post("projects", data, {
        headers: {
          Authorization: professorId,
        },
      });
      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar, tente novamente");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section style={{ paddingRight: "2%" }}>
          <h1>Cadastrar novo projeto</h1>
          <p>
            Utilize a descrição da melhor maneira possível, seja listando links,
            materiais, conteúdos, registro do projeto no GAP ou requisitos aos
            alunos.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleNewProject}>
          <input
            placeholder="Título do Projeto"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            placeholder="Bolsa"
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

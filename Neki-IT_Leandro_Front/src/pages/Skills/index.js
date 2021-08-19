import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import foto from "../../assets/images/adulto-homem.png";
import axios from "axios";
import api from "../../services/api";
import { login, getcode } from "../../services/auth";
import { Form, Container, View } from "./styles";
import { DivPhoto } from "./styles";
import { DivPerfil, Botao } from "./styles";
import { logout } from "../../storage";
import { Formik, Field, FastField } from "formik";

class SignIn extends Component {
  state = {
    email: "",
    senha: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, senha } = this.state;
    if (!email || !senha) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/usuario/login",
          { email, senha }
        );
        // console.log('Data.token: ' + JSON.stringify(response.data))
        console.log("Auth: " + response.data.token);
        login(response.data.token);
        getcode(response.data.codigoUsuario);

        this.props.history.push("/inicio");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
    setTimeout(() => {
      window.location.reload();
    });
  };

  render() {
    return (
      <Container>
        <DivPhoto>
          <img src={foto} alt="Logo" width="150px" height="150px" />
        </DivPhoto>
        <DivPerfil>
          <h1>PERFIL</h1>
          {/* <Div2>                
                <DivForm>
                  <label>Linguagens 1 *</label>
                  <FastField                    
                    name="linguagens1"
                    type="text"
                    placeholder="Java, JS, PHP..."
                  />
                </DivForm>

                <DivForm>
                <label>Linguagens 2</label>
                  <FastField                    
                    name="linguagens2"
                    type="text"
                    placeholder="Java, JS, PHP..."
                  />
                </DivForm>

                <DivForm>
                <label>Linguagens 3</label>
                  <FastField                    
                    name="linguagens3"
                    type="text"
                    placeholder="Java, JS, PHP..."
                  />
                </DivForm>
              </Div2>

              <Div2>
                <DivForm>
                  <label>Nível de Inglês *</label>
                  <FastField
                    required
                    name="rg"
                    type="text"
                    placeholder="Básico / Intermediário / Avançado"
                  />
                </DivForm>                
              </Div2> */}
        </DivPerfil>

        <Link to="/">
          <Botao type="submit" onClick={logout}>
            Sair
          </Botao>
        </Link>
      </Container>
    );
  }
}

export default withRouter(SignIn);

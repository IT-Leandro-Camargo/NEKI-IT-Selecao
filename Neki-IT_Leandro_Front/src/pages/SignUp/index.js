import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Container, View, Div } from "./styles";
import { FaGoogle, FaFacebook } from "react-icons/fa";

// import api from "../../services/api";

// import clientesApi from "../../services/clientes-api";
// import Cliente from "../../model/cliente";

const SignUp = () => {
  // const [userName, setUserName] = useState("");
  // const [senha, setSenha] = useState("");

  // const enviarDados =  async () => {

  //     let dadosCliente = new Cliente({
  //         userName: userName,
  //         senha: senha,

  //     })

  //     clientesApi.cadastrarCliente(dadosCliente).then(function (response) {
  //         alert("Cliente criado com sucesso")
  //         window.open("/", ("_self"))
  //       })
  //       .catch(function (error) {
  //         alert("Não foi possível criar este cliente");
  //       });
  // }

  return (
    <Container>
      <Form>
        <h1>CRIE SEU PERFIL</h1>
        {/* {this.state.error && <p>{this.state.error}</p>} */}
        <form>
          {/* <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">E-mail</label>
                  <input
                    id="userName" type="text" 
                    placeholder="nickname" 
                    required
                    // value={userName} 
                    // onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Senha</label>
                  <input
                    id="senha" type="password" 
                    placeholder="******" 
                    // value={senha} 
                    // onChange={(e) => setSenha(e.target.value)}
                  />
                </div> */}
          <Link to="/cadastro">
            <button type="button">Cadastrar</button>
          </Link>
        </form>
        {/* <Div>
                <Link to="#">
                  <h6><FaGoogle /> Entrar com Google</h6>
                </Link>
                <Link to="#">
                  <h6><FaFacebook /> Entrar com Facebook</h6>
                </Link>
              </Div> */}
        <hr />
        <Link to="/signin">Faça seu Login</Link>
      </Form>
    </Container>
  );
};
export default SignUp;

// class SignUp extends Component {
//   state = {
//     username: "",
//     email: "",
//     senha: "",
//     error: ""
//   };

//   handleSignUp = async e => {
//     e.preventDefault();
//     const { username, email, senha } = this.state;
//     if (!username || !email || !senha) {
//       this.setState({ error: "Preencha todos os dados para se cadastrar" });
//     } else {
//       try {
//         await api.post("/create", { username, email, senha });
//         this.props.history.push("/signin");
//       } catch (err) {
//         console.log(err);
//         this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
//       }
//     }
//   };

//   render() {
//     return (
//       <Container>
//         <Form onSubmit={this.handleSignIn}>
//           <h1>CRIE SUA CONTA</h1>
//           {this.state.error && <p>{this.state.error}</p>}
//           <form>
//             <div class="mb-3">
//               <label for="exampleInputEmail1" class="form-label">E-mail</label>
//               <input
//                 type="email"
//                 class="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Digite seu E-mail"
//                 onChange={e => this.setState({ username: e.target.value })}
//               />
//             </div>
//             <div class="mb-3">
//               <label for="exampleInputEmail1" class="form-label">Senha</label>
//               <input
//                 type="password"
//                 class="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Senha"
//                 onChange={e => this.setState({ senha: e.target.value })}
//               />
//             </div>

//             <button type="submit">Cadastrar</button>
//           </form>
//           <hr />
//           <Link to="/signin">Faça seu Login</Link>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default withRouter(SignUp);

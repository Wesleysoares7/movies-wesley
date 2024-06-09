import { useState } from "react";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import CheckBox from "../../../../components/checkBox";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <div
      className="bg-black/70 w-[28.125rem] h-4/6 py-12
        z-10 rounded-md flex flex-col gap-4 px-16"
    >
      <h1 className="text-3xl opacity-100 text-white font-bold mb-3">Enter</h1>
      <Input
        value={email}
        setValue={setEmail}
        placeholder="Email ou número de celular"
        type="text"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Senha"
        type="text"
      />
      <Button handleClick={() => {}}>Entrar</Button>
      <p className="text-white text-center">OU</p>
      <Button color="bg-gray-500/50" handleClick={() => {}}>
        Usar código de acesso
      </Button>
      <a
        href="#"
        className="text-white text-center ease-in-out hover:underline decoration-solid"
      >
        Esqueceu a senha?
      </a>
      <CheckBox
        value={rememberMe}
        setValue={setRememberMe}
        id="checkbox"
        label="Lembrar de mim"
      />
      <p className="text-white">
        Novo por aqui?
        <a
          className="font-bold hover:underline decoration-solid transition-all duration-300"
          href="#"
        >
          {" "}
          Clique aqui.
        </a>
      </p>
      <p className="text-gray-500 text-xs">
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não
        é um robô.{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline decoration-solid transition-all duration-300"
        >
          Saiba mais.
        </a>
      </p>
    </div>
  );
}

export default LoginForm;

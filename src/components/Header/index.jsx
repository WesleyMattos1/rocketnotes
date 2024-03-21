import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {

  return (
    <Container>
      <Profile>
        <img src="https://github.com/WesleyMattos1.png"
          alt="Foto do usuário" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Wesley Mattos</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
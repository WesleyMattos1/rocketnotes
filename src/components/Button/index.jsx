import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {


  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {/* Se loading estiver adicionado apresentar Carregando : se não Title que será o botão. */}
      {loading ? 'Carregando...' : title}

    </Container>
  )

}
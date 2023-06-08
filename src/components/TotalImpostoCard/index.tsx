import { Amount, Container, Cpf, Footer, Header } from "./styles";

import { notasTotalDTO } from "../../storage/notasTotalDTO";

type TotalProps = {
  data: notasTotalDTO;
};

export function TotalImpostoCard({ data }: TotalProps) {
  return (
    <Container>
      <Header>
        <Cpf>Código Imposto: {data.codigoImposto}</Cpf>
      </Header>

      <Footer>
        <Amount>{`R$${
          data.valorTotalImposto && data.valorTotalImposto.toFixed(2)
        }`}</Amount>
      </Footer>
    </Container>
  );
}

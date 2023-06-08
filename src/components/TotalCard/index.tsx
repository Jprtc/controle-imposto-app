import {
  Container,
  Description,
  Amount,
  Local,
  Footer,
  Date,
  Header,
  Funcao,
  Cpf,
} from "./styles";

import { storageNotasDTO } from "../../storage/storageNotasDTO";
import { convertDateToString } from "../../utils/convertDateToString";
import { notasTotalDTO } from "../../storage/notasTotalDTO";

type TotalProps = {
  data: notasTotalDTO;
};

export function TotalCard({ data }: TotalProps) {
  return (
    <Container>
      <Header>
        <Cpf>Código Imposto:{data.codigoImposto}</Cpf>
      </Header>

      <Header>
        <Amount>{`R$${
          data.valorImposto && data.valorImposto.toFixed(2)
        }`}</Amount>
      </Header>

      <Footer>
        <Cpf>Fornecedor:{data.fornecedor}</Cpf>
      </Footer>
    </Container>
  );
}

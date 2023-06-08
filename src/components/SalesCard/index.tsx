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

export function SalesCard({
  codigoImposto,
  dataNotaFiscal,
  fornecedor,
  notaFiscal,
  produto,
  valorImposto,
}: storageNotasDTO) {
  return (
    <Container>
      <Header>
        <Description>{produto}</Description>
        <Cpf>Código Imposto:{codigoImposto}</Cpf>
      </Header>

      <Header>
        <Amount>{`R$${valorImposto && valorImposto.toFixed(2)}`}</Amount>
        <Amount>{fornecedor}</Amount>
      </Header>

      <Footer>
        <Date>
          {dataNotaFiscal &&
            convertDateToString(dataNotaFiscal).toLocaleDateString("pt-BR")}
        </Date>
        <Cpf>Nota Fiscal:{notaFiscal}</Cpf>
      </Footer>
    </Container>
  );
}

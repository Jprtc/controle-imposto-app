import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { InputAmount } from "../../components/InputAmount";
import { InputDate } from "../../components/InputDate";
import { formatAmount } from "../../utils/formatAmount";
import { convertDate } from "../../utils/convertDate";
import { notaCreate } from "../../storage/notas/notaCreate";
import { ScrollView, Text } from "react-native";
import { Alert } from "react-native";

export function Cadastro() {
  const [notaFiscal, setNotaFiscal] = useState("");
  const [produto, setProduto] = useState("");
  const [codigoImposto, setCodigoImposto] = useState("");
  const [valorImposto, setValorImposto] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [dataNotaFiscal, setDataNotaFiscal] = useState("");

  const allowedImpostoCodes = ["1708", "3770", "3746"];

  const sendData = async () => {
    if (
      !notaFiscal ||
      !produto ||
      !codigoImposto ||
      !valorImposto ||
      !fornecedor ||
      !dataNotaFiscal
    ) {
      Alert.alert("Todos os campos precisam ser preenchidos!");
      return;
    }

    if (!allowedImpostoCodes.includes(codigoImposto)) {
      Alert.alert("Código de Imposto não autorizado!");
      return;
    }

    const createdData = {
      notaFiscal,
      produto,
      codigoImposto,
      valorImposto: formatAmount(valorImposto),
      fornecedor,
      dataNotaFiscal: convertDate(dataNotaFiscal),
    };
    await notaCreate(createdData);
    console.log(createdData);

    Alert.alert("Nota Fiscal Registrada com sucesso!");
    setNotaFiscal("");
    setProduto("");
    setCodigoImposto("");
    setValorImposto("");
    setFornecedor("");
    setDataNotaFiscal("");
  };

  return (
    <Container>
      <Header title="Cadastro de Venda" />

      <ScrollView>
        <Input
          placeholder="Nota Fiscal"
          placeholderTextColor="#363F5F"
          value={notaFiscal}
          onChangeText={(value) => setNotaFiscal(value)}
        />
        <Input
          placeholder="Nome do Produto"
          placeholderTextColor="#363F5F"
          value={produto}
          onChangeText={(value) => setProduto(value)}
        />
        <Input
          placeholder="Código do imposto"
          placeholderTextColor="#363F5F"
          value={codigoImposto}
          onChangeText={(value) => setCodigoImposto(value)}
        />

        <InputAmount
          placeholder="Valor do imposto"
          placeholderTextColor="#363F5F"
          value={valorImposto}
          onChangeText={(value) => setValorImposto(value)}
        />

        <Input
          placeholder="Fornecedor"
          placeholderTextColor="#363F5F"
          value={fornecedor}
          onChangeText={(value) => setFornecedor(value)}
        />

        <InputDate
          placeholder="Data de Emissão"
          placeholderTextColor="#363F5F"
          value={dataNotaFiscal}
          onChangeText={(value) => setDataNotaFiscal(value)}
        />

        <Button title="Adicionar" onPress={sendData} />
      </ScrollView>
    </Container>
  );
}

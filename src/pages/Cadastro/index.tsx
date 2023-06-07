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
  const [cpf, setCpf] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorVenda, setValorVenda] = useState("");
  const [dataVenda, setDataVenda] = useState("");

  const allowedCpfs = ["123456", "654321", "012345"];

  const sendData = async () => {
    if (!cpf || !nomeProduto || !valorVenda || !dataVenda) {
      Alert.alert("Todos os campos precisam ser preenchidos!");
      return;
    }

    if (!allowedCpfs.includes(cpf)) {
      Alert.alert("CPF não autorizado!");
      return;
    }

    const createdData = {
      cpfFunc: cpf,
      nomeProduto,
      valorVenda: formatAmount(valorVenda),
      dataVenda: convertDate(dataVenda),
    };
    await notaCreate(createdData);
    console.log(createdData);

    Alert.alert("Venda Registrada com sucesso!");
    setCpf("");
    setNomeProduto("");
    setDataVenda("");
    setValorVenda("");
  };

  return (
    <Container>
      <Header title="Cadastro de Venda" />

      <ScrollView>
        <Input
          placeholder="CPF do Funcionário"
          placeholderTextColor="#363F5F"
          value={cpf}
          onChangeText={(value) => setCpf(value)}
        />
        <Input
          placeholder="Nome do Produto"
          placeholderTextColor="#363F5F"
          value={nomeProduto}
          onChangeText={(value) => setNomeProduto(value)}
        />

        <InputAmount
          placeholder="Valor de Venda"
          placeholderTextColor="#363F5F"
          value={valorVenda}
          onChangeText={(value) => setValorVenda(value)}
        />

        <InputDate
          placeholder="Data de Venda"
          placeholderTextColor="#363F5F"
          value={dataVenda}
          onChangeText={(value) => setDataVenda(value)}
        />

        <Button title="Adicionar" onPress={sendData} />
      </ScrollView>
    </Container>
  );
}

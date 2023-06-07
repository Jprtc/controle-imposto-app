import { useState, useCallback } from "react";
import { Header } from "../../components/Header";
import { Container, ContainerText, StyledText } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ScrollView, Text, View } from "react-native";
import { SalesCard } from "../../components/SalesCard";
import { storageNotasDTO } from "../../storage/storageNotasDTO";
import { notasGetAll } from "../../storage/notas/notasGetAll";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export function PesquisarVendas() {
  const [cpf, setCpf] = useState("");
  const [produto, setProduto] = useState("");
  const [results, setResults] = useState<storageNotasDTO[]>([]);

  useFocusEffect(
    useCallback(() => {
      setCpf("");
      setProduto("");
      setResults([]);
    }, [])
  );

  const handleSearch = async () => {
    if (!cpf && !produto) {
      Alert.alert("Favor preencher pelo menos um dos campos.");
      return;
    }

    const data = await notasGetAll();

    const filteredData = data.filter((result) => {
      if (cpf && produto) {
        return (
          result.cpfFunc.includes(cpf) && result.nomeProduto.includes(produto)
        );
      } else if (cpf) {
        return result.cpfFunc.includes(cpf);
      } else if (produto) {
        return result.nomeProduto.includes(produto);
      }
    });

    setResults(filteredData);
  };

  return (
    <Container>
      <Header title="Pesquisa por CPF e/ou Produto" />

      <Input
        placeholder="Coloque o CPF aqui"
        placeholderTextColor="#363F5F"
        value={cpf}
        onChangeText={(value) => setCpf(value)}
      />
      <Input
        placeholder="Coloque O Produto aqui"
        placeholderTextColor="#363F5F"
        value={produto}
        onChangeText={(value) => setProduto(value)}
      />

      <Button title="Pesquisar" onPress={handleSearch} />

      <ScrollView>
        {results.map((result, index) => {
          return (
            <SalesCard
              key={index}
              dataVenda={result.dataVenda}
              nomeProduto={result.nomeProduto}
              valorVenda={result.valorVenda}
              cpfFunc={result.cpfFunc}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
}

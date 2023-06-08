import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TotalCard } from "../../components/TotalCard";
import { notasGetAll } from "../../storage/notas/notasGetAll";
import { storageNotasDTO } from "../../storage/storageNotasDTO";
import { Container, StyledText } from "./styles";

export function Pesquisar() {
  const [fornecedor, setFornecedor] = useState("");
  const [codigoImposto, setCodigoImposto] = useState("");

  const [results, setResults] = useState<storageNotasDTO[]>([]);
  const [valorTotalImposto, setValorTotalImposto] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setFornecedor("");
      setCodigoImposto("");
      setResults([]);
      setValorTotalImposto(0);
    }, [])
  );

  const handleSearch = async () => {
    if (!fornecedor || !codigoImposto) {
      Alert.alert("Favor preencher ambos os campos.");
      setResults([]);
      return;
    }

    const data = await notasGetAll();

    let sumValorImposto = 0;

    const filteredData = data.filter((result) => {
      const fornecedorLowerCase = fornecedor.toLowerCase();
      const resultFornecedorLowerCase = result.fornecedor.toLowerCase();

      if (
        resultFornecedorLowerCase === fornecedorLowerCase &&
        result.codigoImposto === codigoImposto
      ) {
        sumValorImposto += result.valorImposto;
        return true;
      } else {
        sumValorImposto = 0;
        setResults([]);
        return false;
      }
    });

    if (filteredData.length === 0) {
      Alert.alert("Não foram encontrados resultados para esta pesquisa");
    }
    console.log("Sum of valorImposto:", sumValorImposto); // Output the sum

    setResults(filteredData);
    setValorTotalImposto(sumValorImposto);
  };

  return (
    <Container>
      <Header title="Pesquisa por Fornecedor e Codigo de Imposto" />

      <Input
        placeholder="Coloque o Fornecedor aqui"
        placeholderTextColor="#363F5F"
        value={fornecedor}
        onChangeText={(value) => setFornecedor(value)}
      />
      <Input
        placeholder="Coloque o código do imposto aqui"
        placeholderTextColor="#363F5F"
        value={codigoImposto}
        onChangeText={(value) => setCodigoImposto(value)}
      />

      <Button title="Pesquisar" onPress={handleSearch} />

      <View style={{ paddingHorizontal: 24, paddingVertical: 12 }}>
        <StyledText>
          {valorTotalImposto > 0 &&
            `Valor Total do Imposto: ${valorTotalImposto}`}
        </StyledText>
      </View>

      <FlatList
        data={results}
        renderItem={({ item }) => <TotalCard data={item} />}
      />
    </Container>
  );
}

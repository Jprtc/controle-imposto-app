import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "../../components/Header";
import { TotalImpostoCard } from "../../components/TotalImpostoCard";
import { notasGetAll } from "../../storage/notas/notasGetAll";
import { notasTotalDTO } from "../../storage/notasTotalDTO";
import { Container } from "./styles";

export function TotaisImposto() {
  const [results, setResults] = useState<notasTotalDTO[]>([]);

  useFocusEffect(
    useCallback(() => {
      handleTotals();
    }, [])
  );

  const handleTotals = async () => {
    let data = await notasGetAll();

    const allowedCodes = ["1708", "3770", "3746"];

    let i = 0;

    const arrayData = [];

    while (i < allowedCodes.length) {
      const totalValue = data
        .filter((dat) => dat.codigoImposto === allowedCodes[i])
        .reduce((total, n) => (total += n.valorImposto), 0);

      const newObject = {
        codigoImposto: allowedCodes[i],
        valorTotalImposto: totalValue,
      };
      arrayData.push(newObject);

      i++;
    }

    setResults(arrayData);
  };

  return (
    <Container>
      <Header title="Listar totais de imposto por código" />

      <FlatList
        data={results}
        renderItem={({ item }) => <TotalImpostoCard data={item} />}
      />
    </Container>
  );
}

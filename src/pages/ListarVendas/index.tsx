import { useLayoutEffect, useState, useCallback } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ScrollView, Text, View } from "react-native";
import { SalesCard } from "../../components/SalesCard";
import { storageNotasDTO } from "../../storage/storageNotasDTO";
import { notasGetAll } from "../../storage/notas/notasGetAll";
import { useFocusEffect } from "@react-navigation/native";

export function ListarVendas() {
  const [results, setResults] = useState<storageNotasDTO[]>([]);

  const fetchData = async () => {
    const data = await notasGetAll();
    const orderedData = data.sort((a, b) => {
      return b.dataVenda < a.dataVenda ? -1 : b.dataVenda > a.dataVenda ? 1 : 0;
    });
    console.log(orderedData);
    setResults(orderedData);
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <Container>
      <Header title="Listar Vendas" />

      {!results || results.length === 0 ? (
        <View>
          <Text>Não há resultados cadastrados</Text>
        </View>
      ) : (
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
      )}
    </Container>
  );
}

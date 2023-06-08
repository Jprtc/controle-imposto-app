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

export function Listar() {
  const [results, setResults] = useState<storageNotasDTO[]>([]);

  const fetchData = async () => {
    const data = await notasGetAll();
    const orderedData = data.sort((a, b) => {
      return b.dataNotaFiscal < a.dataNotaFiscal
        ? -1
        : b.dataNotaFiscal > a.dataNotaFiscal
        ? 1
        : 0;
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
      <Header title="Listar Notas Fiscais" />

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
                codigoImposto={result.codigoImposto}
                dataNotaFiscal={result.dataNotaFiscal}
                fornecedor={result.fornecedor}
                notaFiscal={result.notaFiscal}
                produto={result.produto}
                valorImposto={result.valorImposto}
              />
            );
          })}
        </ScrollView>
      )}
    </Container>
  );
}

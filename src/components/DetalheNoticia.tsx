import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { noticias, Categoria } from '../data/noticias';
import { cores } from '../theme';

export default function DetalheNoticia({ categoria }: { categoria: Categoria }) {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const noticia = noticias.find((n) => n.id === id && n.categoria === categoria);

  // Troca o título do cabeçalho pelo título da notícia
  useLayoutEffect(() => {
    if (noticia) navigation.setOptions({ title: noticia.titulo });
  }, [navigation, noticia]);

  if (!noticia) return null;

  return (
    <View style={styles.tela}>
      <View style={styles.caixa}>
        <Text style={styles.categoria}>{noticia.categoria.toUpperCase()}</Text>
        <Text style={styles.titulo}>{noticia.titulo}</Text>
        <Text style={styles.conteudo}>{noticia.conteudo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
    padding: 16,
  },
  caixa: {
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 6,
    padding: 16,
  },
  categoria: { fontSize: 12, color: cores.textoSuave, marginBottom: 4 },
  titulo: { fontSize: 20, fontWeight: 'bold', color: cores.texto, marginBottom: 10 },
  conteudo: { fontSize: 16, lineHeight: 24, color: cores.texto },
});
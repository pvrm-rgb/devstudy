import { FlatList, StyleSheet } from 'react-native';
import CardNoticia from './CardNoticia';
import { noticias, Categoria } from '../data/noticias';
import { cores } from '../theme';

type Props = { categoria: Categoria; onAbrir: (id: string) => void };

export default function ListaNoticias({ categoria, onAbrir }: Props) {
  const dados = noticias.filter((n) => n.categoria === categoria);

  return (
    <FlatList
      style={styles.lista}
      contentContainerStyle={{ padding: 16 }}
      data={dados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardNoticia noticia={item} onPress={() => onAbrir(item.id)} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    backgroundColor: cores.fundo,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
  },
});
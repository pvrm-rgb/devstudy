import { Pressable, Text, StyleSheet } from 'react-native';
import { cores } from '../theme';
import { Noticia } from '../data/noticias';

type Props = { noticia: Noticia; onPress: () => void };

export default function CardNoticia({ noticia, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.categoria}>{noticia.categoria.toUpperCase()}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo}>{noticia.resumo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 6,
    padding: 14,
    marginBottom: 12,
  },
  categoria: { fontSize: 12, color: cores.textoSuave, marginBottom: 4 },
  titulo: { fontSize: 16, fontWeight: 'bold', color: cores.texto, marginBottom: 4 },
  resumo: { fontSize: 14, color: cores.texto },
});
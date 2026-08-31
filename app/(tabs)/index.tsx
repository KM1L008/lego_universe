import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';

// componentes propios
import SaludoInicial from '@/components/SaludoInicial';
import TarjetaLego from '@/components/TarjetaLego';

export default function HomeScreen() {

  const legos = [
    { id: 1, nombre: 'Batman', piezas: 150, disponible: true, imgUrl: 'https://i.postimg.cc/3w0j2rvQ/5MYC2QWW6FD3BKX2IELLQNYYKQ.webp' },
    { id: 2, nombre: 'Joker', piezas: 200, disponible: false, imgUrl: 'https://i.postimg.cc/766kKcqr/maxresdefault.webp' },
    { id: 3, nombre: 'IronMan', piezas: 300, disponible: true, imgUrl: 'https://i.postimg.cc/4yyxhyYx/859f4b68072516585fc0b4db9c7e2e13.webp' },
    { id: 4, nombre: 'SuperMan', piezas: 400, disponible: false, imgUrl: 'https://i.postimg.cc/htr6NrC2/5808e94c70c9c8b53f56b5a00275c760.webp' },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#17181c' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <SaludoInicial nombre="SpiderMan" rol="Heroe" />
      </ThemedView>

      {legos.map((lego) => (
        <TarjetaLego key={lego.id} nombre={lego.nombre} piezas={lego.piezas} disponible={lego.disponible} imagen={lego.imgUrl} />
      ))}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

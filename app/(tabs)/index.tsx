import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

// componentes propios
import SaludoInicial from '@/components/SaludoInicial';
import TarjetaLego from '@/components/TarjetaLego';

export default function HomeScreen() {

  const legos = [
    { id: 1, nombre: 'Lego HironMan', piezas: 150, disponible: true },
    { id: 2, nombre: 'Lego Deadpool', piezas: 200, disponible: false },
    { id: 3, nombre: 'Lego Wolverine', piezas: 300, disponible: true },
    { id: 4, nombre: 'Lego Spiderman', piezas: 400, disponible: false },
    { id: 5, nombre: 'Lego Batman', piezas: 200, disponible: true },
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
        <TarjetaLego key={lego.id} nombre={lego.nombre} piezas={lego.piezas} disponible={lego.disponible} />
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

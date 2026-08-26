// Importar view y text de react-native
import { View } from 'react-native';
import { ThemedText } from './themed-text';

type SaludoInicialProps = {
  nombre: string;
  rol: string;
};

export default function SaludoInicial({ nombre, rol }: SaludoInicialProps) {
    return (
        <View>
            <ThemedText type="title">Me llamo {nombre} y soy un {rol}</ThemedText>
        </View>
    );
}
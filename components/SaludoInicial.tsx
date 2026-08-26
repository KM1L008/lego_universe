// Importar view y text de react-native
import { View, Text } from 'react-native';
import { ThemedText } from './themed-text';

export function SaludoInicial() {
    const nombre = 'Camilo';

    return (
        <View>
            <ThemedText type="title">Hola, soy {nombre}</ThemedText>
            <ThemedText type="title">Es nuestra nueva app en React Native</ThemedText>
        </View>
    );
}
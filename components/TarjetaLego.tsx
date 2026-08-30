// Importar view y text de react-native
import { View } from 'react-native';
import { ThemedText } from './themed-text';

type TarjetaLegoProps = {
  nombre: string;
  piezas: number;
  disponible: boolean;
};

export default function TarjetaLego({ nombre, piezas, disponible }: TarjetaLegoProps) {
    return (
        <View>
            <ThemedText type="defaultSemiBold">Nombre: {nombre}, Piezas: {piezas}, Disponible: {disponible ? 'Disponible' : 'Agotado'}</ThemedText>
        </View>
    );
}
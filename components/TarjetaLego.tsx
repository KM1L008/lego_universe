// Importar view y text de react-native
import { View, Text } from 'react-native';

type TarjetaLegoProps = {
  nombre: string;
  piezas: number;
};

export default function TarjetaLego({ nombre, piezas }: TarjetaLegoProps) {
    return (
        <View>
            <Text>Soy {nombre} y tengo {piezas} piezas</Text>
        </View>
    );
}
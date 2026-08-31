// Importar view y text de react-native
import { Image, StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

type TarjetaLegoProps = {
    nombre: string;
    piezas: number;
    disponible: boolean;
    imagen: string;
};

export default function TarjetaLego({ nombre, piezas, disponible, imagen }: TarjetaLegoProps) {
    return (
        <ThemedView style={estilos.tarjeta}>
            <Image style={estilos.foto} source={{ uri: imagen }}></Image>
            <ThemedView style={{ backgroundColor: '#23262b' }}>
                {disponible ? (
                    <ThemedText type="defaultSemiBold" style={estilos.disponible}>Disponible</ThemedText>
                ) : (
                    <ThemedText type="defaultSemiBold" style={estilos.agotado}>Agotado</ThemedText>
                )}
                <ThemedText type="defaultSemiBold">Nombre: {nombre}</ThemedText>
                <ThemedText type="default">Piezas: {piezas}</ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const estilos = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#23262b',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    disponible: {
        backgroundColor: '#224131',
        color: '#91b7a2',
        paddingVertical: 1,
        paddingHorizontal: 8,
        alignSelf: 'flex-start',
        fontSize: 12,
        borderRadius: 10,
    },
    agotado: {
        backgroundColor: '#361715',
        color: '#dcb4b5',
        paddingVertical: 1,
        paddingHorizontal: 8,
        alignSelf: 'flex-start',
        fontSize: 12,
        borderRadius: 10,
    },
    foto: {
        width: 70,
        height: 70,
        borderRadius: 60,
    }
});
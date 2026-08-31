// Importar view y text de react-native
import { StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

type TarjetaLegoProps = {
    nombre: string;
    piezas: number;
    disponible: boolean;
};

export default function TarjetaLego({ nombre, piezas, disponible }: TarjetaLegoProps) {
    return (
        <ThemedView style={estilos.tarjeta}>
            {disponible ? (
                <ThemedText type="defaultSemiBold" style={estilos.disponible}>Disponible</ThemedText>
            ) : (
                <ThemedText type="defaultSemiBold" style={estilos.agotado}>Agotado</ThemedText>
            )}
            <ThemedText type="defaultSemiBold">Nombre: {nombre}</ThemedText>
            <ThemedText type="default">Piezas: {piezas}</ThemedText>
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
    },
    disponible: {
        backgroundColor: '#224131',
        color: '#91b7a2',
        padding: 1,
        paddingLeft: 8,
        paddingRight: 8,
        alignSelf: 'flex-start',
        fontSize: 12,
        borderRadius: 10,
    },
    agotado: {
        backgroundColor: '#361715',
        color: '#dcb4b5',
        padding: 1,
        paddingLeft: 8,
        paddingRight: 8,
        alignSelf: 'flex-start',
        fontSize: 12,
        borderRadius: 10,
    }
});
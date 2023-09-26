import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 25 de setembro de 2023.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor='#6B6B6B'
        keyboardType='numeric'
      />
    </View>
  );
}
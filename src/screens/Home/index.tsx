import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 25 de setembro de 2023.
      </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor='#6B6B6B'
        keyboardType='numeric'
      />

      <TouchableOpacity style ={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
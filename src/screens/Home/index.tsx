import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {

  const participants = ['Guilherme','Marina', 'Juliana', 'Lucas', 'Pedro','Isa', 'Julia', 'Maria', 'Maxuel', 'Jorge', 'Rogerio', 'Maique'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
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
<ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Leonardo")} />
        ))
      }
</ScrollView>
      
    </View>
  );
}
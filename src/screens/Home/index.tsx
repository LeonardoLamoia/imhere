import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

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
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
      <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Leonardo")} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
      
    </View>
  );
}
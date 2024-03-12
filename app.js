import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function VerificadorIdade() {
  const [idadeInput, setIdadeInput] = useState('');
  const [grupoIdade, setGrupoIdade] = useState('');

  const verificarGrupoIdade = () => {
    const idade = parseInt(idadeInput);

    if (isNaN(idade)) {
      setGrupoIdade('Por favor, insira uma idade válida.');
    } else if (idade >= 0 && idade <= 12) {
      setGrupoIdade('Criança');
    } else if (idade >= 13 && idade <= 17) {
      setGrupoIdade('Adolescente');
    } else if (idade >= 18 && idade <= 20) {
      setGrupoIdade('Jovem');
    } else if (idade >= 21 && idade <= 60) {
      setGrupoIdade('Adulto');
    } else if (idade > 60) {
      setGrupoIdade('Idoso');
    } else {
      setGrupoIdade('Idade inválida.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Faixa Etária</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua idade"
        onChangeText={(text) => setIdadeInput(text)}
        value={idadeInput}
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={verificarGrupoIdade} />
      <Text style={styles.resultado}>{grupoIdade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
  },
});

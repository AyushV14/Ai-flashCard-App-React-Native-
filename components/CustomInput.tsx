import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean; // New prop to enable/disable toggle
}

const CustomInput = ({ placeholder, secureTextEntry = false, showPasswordToggle = false }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPasswordVisible}
        placeholderTextColor="#888"
      />
      {showPasswordToggle && (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Text style={styles.toggleText}>{isPasswordVisible ? '👁️' : '👁️‍🗨️'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  toggleButton: {
    padding: 10,
  },
  toggleText: {
    fontSize: 18,
    color: '#1e3a8a',
  },
});

export default CustomInput;
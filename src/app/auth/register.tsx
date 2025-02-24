import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerUser } from '../../services/authServices';

const registerSchema = z.object({
  name: z.string().nonempty('El nombre es obligatorio'),
  email: z.string().email('Formato de email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setServerError(null); 
    console.log('entro a onsubmit');
    try {
      const result = await registerUser({
        first_name: data.name,
        last_name: data.name,
        email: data.email,
        password: data.password,
        country: 'Chile', 
      });

      if (result.success) {
        console.log('Usuario registrado:', result.response);
        router.push('auth/login'); 
      } else {
        console.log(result.message);
        setServerError(result.message);
      }
    } catch (error) {
      setServerError('Ocurrió un error inesperado. Intenta nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(text) => setValue('name', text)}
        {...register('name')}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setValue('email', text)}
        {...register('email')}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setValue('password', text)}
        {...register('password')}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      {serverError && <Text style={styles.serverError}>{serverError}</Text>}

      <Button title="Registrar" onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />

      <Button title="¿Ya tienes cuenta? Inicia sesión" onPress={() => router.push('auth/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  serverError: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
});
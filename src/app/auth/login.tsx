import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// 1. Define tu esquema con zod
const loginSchema = z.object({
  email: z.string().email('Formato de email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

// 2. Obtén el tipo inferido a partir del esquema
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  // 3. Configura react-hook-form con zodResolver
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  // 4. Función que se ejecuta al enviar el formulario
  const onSubmit = (data: LoginFormData) => {
    console.log('Datos del formulario:', data);
    // Aquí podrías hacer tu lógica de login, peticiones a API, etc.
    // Si todo sale bien, podrías redirigir a otra pantalla:
    // router.push('/(tabs)'); // ejemplo si quieres ir a la vista principal
  };

  // 5. Asocia los TextInput con setValue manualmente
  //    (o usa Controller si prefieres un approach más automático)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setValue('email', text)}
        // register('email') se encarga de "inscribir" el campo en RHF
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

      <Button title="Ingresar" onPress={handleSubmit(onSubmit)} />

      {/* Botón para navegar a la pantalla de registro, si lo deseas */}
      <Button title="Crear cuenta" onPress={() => router.push('/register')} />
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
});

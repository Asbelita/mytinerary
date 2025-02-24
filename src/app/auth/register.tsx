import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  name: z.string().nonempty('El nombre es obligatorio'),
  email: z.string().email('Formato de email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Datos del formulario de registro:', data);
    // Aquí la lógica de registro: petición a API, etc.
    // router.push('/login'); // Por ejemplo, volver al login al terminar
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

      <Button title="Registrar" onPress={handleSubmit(onSubmit)} />

      {/* Botón para volver a login */}
      <Button title="¿Ya tienes cuenta? Inicia sesión" onPress={() => router.push('/login')} />
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

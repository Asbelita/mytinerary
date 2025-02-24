import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  
  const goToLogin = () => {
    router.push("auth/login");
  };

  const goToRegister = () => {
    router.push("auth/register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      
      <Pressable style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={goToRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

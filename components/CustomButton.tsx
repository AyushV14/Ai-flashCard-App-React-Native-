import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: number | string; // Adjusted to match DimensionValue
}

const CustomButton = ({ title, onPress, width }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, { width } as ViewStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>
        {title}
        {title === "Get Started" && <Text style={styles.arrow}>›</Text>}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  arrow: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default CustomButton;
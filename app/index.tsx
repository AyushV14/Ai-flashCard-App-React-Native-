import { Text, View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff9e6",
        paddingLeft: 20,
      }}
    >
      <View
        style={{
          marginRight: 10,
          // marginTop: -40,
        }}
      >
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Master{" "}</Text>
          <View style={styles.box1}>
            <Text style={styles.boxText}>notes</Text>
          </View>
          <Text style={styles.titleText}>,{" "}</Text>
          <View style={styles.box2}>
            <Text style={styles.boxText}>quizzes</Text>
          </View>
          <Text style={styles.titleText}>, or{" "}</Text>
          <View style={styles.box3}>
            <Text style={styles.boxText}>flashcards</Text>
          </View>
          <Text style={styles.titleText}>.</Text>
        </View>
        {/* subtitle */}
        <Text style={styles.subtitle}>
          We help students learn smarter with auto-generated flashcards from your
          text.
        </Text>
      </View>
      <LottieView
        source={require("@/assets/animations/books.json")}
        autoPlay
        loop
        style={{ width: 300, height: 350 }}
      />
      <CustomButton title="Get Started" onPress={() => router.replace("/auth/Signin")} width={290} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 10,
  },
  box1: {
    backgroundColor: "#00cc99",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  box2: {
    backgroundColor: "#cc66ff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  box3: {
    backgroundColor: "#ff9900",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  boxText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#666",
    textAlign: "left",
    marginBottom: 20,
    paddingHorizontal: 0,
  },
});
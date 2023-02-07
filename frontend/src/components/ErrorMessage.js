import { StyleSheet, Text, View } from "react-native";

export const ErrorMessage = ({
  error
}) => {
  return (
    <View style={styles.center} id="errorView">
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: '#ff0000'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
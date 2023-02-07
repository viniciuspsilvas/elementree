import { ActivityIndicator, StyleSheet, View } from "react-native";

export const LoadingSpinner = ({
  loading = true
}) => {

  if (!loading) return null

  return (
    <View style={styles.center} id="loading" >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
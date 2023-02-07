import { StyleSheet, Text, View } from "react-native";

export const NoDataFound = ({
  message = 'No data found'
}) => {
  return (
    <View style={styles.center} id="noDataFound">
      <Text>{message}</Text>
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
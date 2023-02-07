import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const RefreshButton = ({
  onPress
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touchableOpacityStyle}>
      <FontAwesome name="refresh" size={34} color="green" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    zIndex: 9999,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 8
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  }
});
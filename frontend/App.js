
import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ErrorMessage } from "./src/components/ErrorMessage";
import { LoadingSpinner } from "./src/components/LoadingSpinner";
import { NoDataFound } from "./src/components/NoDataFound";
import { RefreshButton } from "./src/components/RefreshButton";
import { useCoordinates } from "./src/hooks/useCoordinates";

// Mermaid Beach
const initialRegion = {
  latitude: -28.0407750895137,
  longitude: 153.4079675401774,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
}

const App = () => {
  const { response, loading, error, refetch } = useCoordinates()

  const clickHandler = () => {
    refetch()
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error.message} onRetry={refetch} />;
  }
  if (!!response === false || response.length === 0) {
    return <NoDataFound />;
  }

  return (
    <View style={styles.container} id="mainView">
      <RefreshButton onPress={clickHandler} />

      <MapView
        style={styles.map}
        initialRegion={initialRegion}>
        {response.map((coordinate, index) => (
          <Marker
            key={index}
            provider={PROVIDER_GOOGLE}
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1,
  },
});

export default App;

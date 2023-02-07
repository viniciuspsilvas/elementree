import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useCoordinates } from "./src/hooks/useCoordinates";
import { ActivityIndicator } from 'react-native';

// Mermaid Beach
const initialRegion = {
  latitude: -28.0407750895137,
  longitude: 153.4079675401774,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
}

const App = () => {
  const { response, loading, error } = useCoordinates()

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }
  if (!!response === false || response.length === 0) {
    return <NoDataFound />;
  }

  return (
    <View style={styles.container} id="mainView">
      <MapView
        style={styles.map}
        initialRegion={initialRegion}>
        {response.map((coordinate, index) => (
          <Marker
            key={index}
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

const ErrorMessage = ({ error }) => (
  <View style={styles.center}  id="errorView">
    <Text style={styles.error}>{error}</Text>
  </View>
)

const Loading = () => (
  <View style={styles.center} id="loading" >
    <ActivityIndicator size="large" color="#0000ff" />
  </View>

)

const NoDataFound = () => (
  <View style={styles.center} id="noDataFound">
    <Text>No data found</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  error: {
    color: '#ff0000'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    flex: 1,
  },
});

export default App;

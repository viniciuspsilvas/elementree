import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const App = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const data = {
          boundaryBox: {
            latitudeMin: -28.0407250895137,
            latitudeMax: -28.07199412367492,

            longitudeMin: 153.4079275405774,
            longitudeMax: 153.43933741928933
          },
          numberOfCoordinates: 4
        }
        console.log("#### process.env.API_URL", process.env.API_URL)

        const response = await axios.post(
          `${process.env.API_URL}/generateCoordinates`,
          data
        );

        setCoordinates(response.data);
      } catch (error) {

        // TODO: Show a alert error
        console.error(error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -28.0407750895137,
          longitude: 153.4079675401774,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {coordinates.map((coordinate, index) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;

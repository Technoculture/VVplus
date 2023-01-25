import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Wait, we are fetching you location..."
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, [displayCurrentAddress]);

  const CheckIfLocationEnabled = async () => {
    const enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      setErrorMsg("Location Service not enabled");
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission not granted");
    }

    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (const item of response) {
        const address = `${item.name}, ${item.country},${item.district},${item.subregion}, ${item.region},${item.postalCode}, ${item.city}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  return [errorMsg, locationServiceEnabled, displayCurrentAddress];
};

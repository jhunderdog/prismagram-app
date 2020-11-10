import React, { useState, useEffect } from "react";
import * as Permisssions from "expo-permissions";
import { Image } from "react-native";
import * as MediaLibrary from "expo-media-library";
import styled from "styled-components";
import Loader from "../../components/Loader";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();
  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync();
      consolg.log(assets);
      const [firstPhoto] = assets;
      setSelected(firstPhoto);
      setAllPhotos(assets);
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      console.log(status);
      if (status === "granted"){
        setHasPermission(true);
        getPhotos();
      }
    } catch (e) {
      console.log(e);
      hasPermission(false);
    }
  };
  useEffect(() => {
    askPermission();
  }, []);
  return (
    <View>
      {loading ? (
        <Loader/> 
      ) : (
        <View>
          {hasPermission ? (
            <Image
            style= {{ width: 100, width: 100}}
            source = {{ uri:selected.uri}}
            />
          ):null}
          </View>
      )}
    </View>
  )
}
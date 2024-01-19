import { useState } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { bannerData } from "../../constants/General";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

function Item({ index, dt }) {
  return (
    <View style={[styles.card, {
      marginLeft: index === 0 ? SIDECARD_LENGTH : SPACING,
      marginRight: index === 2 ? SIDECARD_LENGTH : SPACING,
    }]}>
      <Image
        source={{ uri: dt?.img }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}

export default function Carousel() {

  const [scrollX, setScrollX] = useState(0);

  return (
    <View>
      <FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
        snapToAlignment={"center"}
        data={bannerData}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <Item index={index} dt={item} />
          );
        }}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 150,
    overflow: "hidden",
    borderRadius: 15,
  }
});

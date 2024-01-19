import { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { add_to_favourites } from '../../store/reducers/GlobalReducer';
import { useDispatch, useSelector } from 'react-redux';

const ProductCarousel = (props) => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.global_values);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const currentIndex = Math.round(contentOffset.x / Dimensions.get('window').width);
    setActiveIndex(currentIndex);
  };

  const handleToggleFavorite = () => {
    setFavorite(!isFavorite);
    dispatch(add_to_favourites(props))
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  const renderIndicator = (index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        flatListRef.current.scrollToIndex({ index, animated: true });
      }}
      style={[styles.dot, index === activeIndex && styles.activeDot]}
    />
  );


  useEffect(() => {
    if (props?.id in favourites) {
      setFavorite(true);
    }
  }, [props, favourites]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={props?.images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
        snapToInterval={Dimensions.get('window').width}
      />

      <View style={styles.favoriteButtonContainer}>
        <TouchableOpacity style={styles.favoriteButton} onPress={handleToggleFavorite}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.indicatorContainer}>
        {props?.images?.map((_, index) => renderIndicator(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  carouselItem: {
    width: Dimensions.get('window').width,
    height: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 15,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#E4E4E4',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#F9B023',
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
  },
});

export default ProductCarousel;

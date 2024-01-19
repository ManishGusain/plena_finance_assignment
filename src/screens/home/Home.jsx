import { ScrollView, StyleSheet, View } from "react-native";
import Carousel from "../../components/molecules/Carousel";
import Hero from "../../components/molecules/Hero";
import ProductCard from "../../components/molecules/ProductCard";
import Typography from "../../components/atoms/Typography";
import { products_list_api } from "../../api";
import { useEffect, useState } from "react";
import Loader from "../../components/atoms/Loader";


export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      let { data } = await products_list_api(20);
      setProducts(data?.products);
    }
    catch (err) {
      console.log(err)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>

      {isLoading ? <Loader /> : null}

      <Hero />

      <View style={styles.section}>
        <Carousel />
      </View>

      <Typography variant="h1" color="#1E222B" style={styles.sectionTitle}>Recommended</Typography>

      <View style={styles.productContainer}>
        {
          products?.map((item, index) => {
            return (
              <View key={index} style={{ margin: 5 }}>
                <ProductCard {...item} />
              </View>
            );
          })
        }
      </View>

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    paddingLeft: 10
  },
  flatListContainer: {
    paddingBottom: 80,
  },
  productContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});
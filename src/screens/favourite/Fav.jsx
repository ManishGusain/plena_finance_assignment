import { ScrollView, View, StyleSheet } from "react-native";
import Typography from "../../components/atoms/Typography";
import Header from "../../components/molecules/Header";
import BasicLayout from "../../layouts/Basic";
import ProductCard from "../../components/molecules/ProductCard";
import { useSelector } from "react-redux";


export default function FavScreen() {
  const { favourites } = useSelector((state) => state.global_values)

  return (
    <BasicLayout>
      <ScrollView contentContainerStyle={styles.scrollStyle} showsVerticalScrollIndicator={false}>
        <Header type="type3" title={'Favourites'} showbackBtn={true} bagIconColor={'#000'} />

        <View style={styles.section}>

          {
            Object.keys(favourites)?.length === 0 ?
              <Typography variant="body3">No data</Typography>
              :
              Object.keys(favourites)?.map((edx, index) => {
                return (
                  <View style={{ margin: 5 }} key={index}>
                    <ProductCard {...favourites[edx]} />
                  </View>
                );
              })
          }
        </View>
      </ScrollView>
    </BasicLayout>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    paddingBottom: 80
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  }
});
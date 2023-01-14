import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native'
import { useState } from 'react';
import styles from './styles';

//Data
import jsonData from '../../data/attractions.json'
import categoriesData from '../../data/categories.json'

//Components
import Title from '../title';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import { useEffect } from 'react';

const ALL = 'All'

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(selectedCategory === ALL){
      setData(jsonData)
    } else {
      const filteredData = jsonData.filter(item => 
        item.categories.includes(selectedCategory)
      ) 
      setData(filteredData)
    }
  }, [selectedCategory])

  

  return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */}
             
                  {/* contentContainerStyle to keep 2 columns */}
                  {/* <ScrollView contentContainerStyle={styles.row}>  */}
                    {/* {[...data, ...data]?.map(item => (
                      <AttractionCard
                          key={item.id}
                          title={item.name}
                          subtitle={item.city}
                          imageSrc={item.images[0]}
                      />
                      ))} */}
                {/* </ScrollView> */}

                <FlatList 
                  data={data}
                  keyExtractor={(item) => String(item?.id)}
                  numColumns={2}
                  style={{ flexGrow: 1}}
                  ListEmptyComponent={(<Text style={styles.emptyText}>No items found</Text>)}
                  ListHeaderComponent={(
                    <>
                      <Title text="Where do" style={{fontWeight: 'normal'}} />
                      <Title text="you want to go?" style={styles.title} />
                      <Title text="Explore attractions" style={styles.subtitle} />
                      <Categories selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} categories={[ALL, ...categoriesData]} />
                    </>
                  )}
                  renderItem={({item}) => (
                    <AttractionCard
                          title={item.name}
                          subtitle={item.city}
                          imageSrc={item.images[0]}
                          navigation={navigation}
                          item={item}
                      />
                  )}
                />
        {/* </ScrollView> */}
      </SafeAreaView>
  )
}

export default Home
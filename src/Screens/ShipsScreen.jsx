import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { getSpaceShips } from '../api/api'
import { FlatList } from 'react-native-gesture-handler'
import ShipContainer from '../components/ShipContainer'
import { images } from '../utils/images'

const ShipsScreen = ({token}) => {

  const [spaceShipList, setSpaceShipList] = useState([])

  useEffect(() => {
    const fetchGetShips = async () => {
      try {
        const data = await getSpaceShips(token)
        const shipList = data.shipListings
        if(spaceShipList.length == 0){
          setSpaceShipList(shipList)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchGetShips()
  }, [])

  return (
    <ImageBackground source={images.places.shop} resizeMode='cover' style={{height: '100%', width: '100%'}}>
      <View style={styles.centerItems}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 30, marginVertical: 20, color: 'aqua', fontWeight: '600'}}>Available ships</Text>
        </View>
        <View style={{flex: 5, height: '100%', width: '100%'}}>
          <View style={styles.centerItems}>
          <FlatList 
            data={spaceShipList}
            style= {{flex: 1, width: '70%'}}
            renderItem={({item}) => {
              return (
                <ShipContainer item={item} />
                )
              }}
              />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  centerItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ShipsScreen
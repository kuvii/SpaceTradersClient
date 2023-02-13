import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getSpaceShips } from '../api/api'
import { FlatList } from 'react-native-gesture-handler'
import ShipContainer from '../components/ShipContainer'

const ShipsScreen = () => {

  const [spaceShipList, setSpaceShipList] = useState([])

  useEffect(() => {
    const fetchGetShips = async () => {
      try {
        const data = await getSpaceShips()
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
    <View style={styles.centerItems}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, marginVertical: 20}}>Available ships</Text>
      </View>
      <View style={{flex: 5, height: '100%', width: '100%'}}>
        <View style={styles.centerItems}>
        <FlatList 
          data={spaceShipList}
          style= {{flex: 1, width: '70%'}}
          renderItem={({item}) => {
            const {type, speed, weapons, maxCargo} = item
            return (
              <View> 
                <Text>{type}</Text>
                <Text>{speed}</Text>
                <Text>{weapons}</Text>
                <Text>{maxCargo}</Text>
              </View>
              )
            }}
        />
        </View>
      </View>
    </View>
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
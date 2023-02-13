import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getSpaceShips } from '../api/api'

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
    <View>
      <Text>ShipsScreen</Text>
    </View>
  )
}

export default ShipsScreen
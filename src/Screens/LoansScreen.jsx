import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { getLoansAvailable } from '../api/api'

const LoansScreen = () => {

  const [loansAvailable, setLoansAvailable] = useState([])

  useEffect(() => {
    const fetchGetLoansAvailable = async () => {
      try {
        const data = await getLoansAvailable()
        const loans = data.loans
        if (loansAvailable.length == 0){
          setLoansAvailable(loans)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchGetLoansAvailable()
  }, [])

  return (
    <View>
      <Text>LoansScreen</Text>
    </View>
  )
}

export default LoansScreen
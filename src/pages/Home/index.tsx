import React, { useEffect } from 'react'
import { Props } from './types'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../store/country/actions'
import { ApplicationState } from '../../store/types'
import CountryCard from '../../components/CountryCard'

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const { countries } = useSelector((state: ApplicationState) => state.country)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div className='country-list'>
      {countries.map(country => <CountryCard key={country.code} country={country} />)}
    </div>
  )
}
export default Home
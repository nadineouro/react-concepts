import React, { useEffect } from 'react'
import { Props } from './types'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../store/country/actions'
import { ApplicationState } from '../../store/types'

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const { countries } = useSelector((state: ApplicationState) => state.country)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div className='country-list'>
      {countries.map(country => <label key={country.code}>{country.name}</label>)}
    </div>
  )
}
export default Home
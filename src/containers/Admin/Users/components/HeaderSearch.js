import React, { useState } from 'react'
import { func, objectOf, string } from 'prop-types'

const HeaderSearch = ({ onSubmit, params = {} }) => {
  const [searchValue, setSearchValue] = useState('')

  const onSubmitHandler = () => onSubmit({ ...params, search: searchValue })

  const onChangeHandler = ({ target }) => setSearchValue(target.value)

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmitHandler()
    }
  }

  return (
    <div className='header__main--search'>
      <form className='searchForm'>
        <div className='searchForm__row row align-center'>
          <button className='searchForm__submit' type='button' onClick={onSubmitHandler} />
          <input
            className='searchForm__input'
            value={searchValue}
            type='text'
            onChange={onChangeHandler}
            onKeyPress={handleKeyPress}
            placeholder='Search …'
          />
        </div>
      </form>
    </div>
  )
}

HeaderSearch.propTypes = {
  onSubmit: func.isRequired,
  params: objectOf(string)
}

export default HeaderSearch

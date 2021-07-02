import React, { useState } from 'react'
import { Input } from 'antd'

const SEARCH_TIMEOUT = 500
type Props = {
  value?: string
  handleSearch: (value: string | undefined) => void
}

export const Search: React.FunctionComponent<Props> = ({
  value,
  handleSearch,
}) => {
  const [debounceSearch, setDebounceSearch] = useState<any>()
  const [search, setSearch] = useState<string | undefined>(value)

  const onSearch = (event: any) => {
    const value: string | undefined =
      event.target.value === '' ? undefined : event.target.value
    setSearch(value)
    if (debounceSearch) {
      clearTimeout(debounceSearch)
    }
    setDebounceSearch(
      setTimeout(() => {
        handleSearch(value)
      }, SEARCH_TIMEOUT)
    )
  }

  return (
    <Input
      name="search"
      placeholder="Поиск"
      size="large"
      value={search}
      onChange={onSearch}
    />
  )
}

import React from 'react'
import { Button, Result, Spin, Tooltip } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'
import styles from './styles.module.css'
import { isNotFoundError } from '../../services/api/client/types'
import { NotFound } from '../../pages/NotFound'

type Props<ResponseData> = {
  isLoading: boolean
  response: { data: ResponseData } | null
  error: any
  renderData: (data: ResponseData) => React.ReactNode
  errorMessage?: string
  reload?: () => void
  inline?: boolean
  renderNotFound?: boolean
}

// AsyncStates обрабатывает общие состояния при загрузке данных: спиннер, экран ошибки
export function View<ResponseData>({
  isLoading,
  response,
  error,
  renderData,
  errorMessage = 'При загрузке данных произошла ошибка',
  reload,
  renderNotFound = false,
  inline = false,
}: Props<ResponseData>) {
  if (isLoading) {
    return (
      <>
        {inline ? (
          <Spin size="small" />
        ) : (
          <div className={styles.loading}>
            <Spin size="large" />
          </div>
        )}
      </>
    )
  }

  if (error && isNotFoundError(error) && renderNotFound) {
    return <NotFound />
  }

  if (error || !response?.data) {
    return (
      <>
        {inline ? (
          <Tooltip title={errorMessage}>
            <Button type="primary" onClick={reload} size="small">
              <ReloadOutlined />
            </Button>
          </Tooltip>
        ) : (
          <Result
            status="500"
            title="Возникла проблема при загрузке"
            subTitle={errorMessage}
            extra={
              reload && (
                <Button type="primary" onClick={reload}>
                  Повторить
                </Button>
              )
            }
          />
        )}
      </>
    )
  }

  return <> {renderData(response.data)} </>
}

import Axios, { AxiosRequestConfig } from 'axios'
import md5 from 'md5'

const {
  REACT_APP_MARVEL_API_URL = '',
  REACT_APP_MARVEL_PUBLIC_KEY = '',
  REACT_APP_MARVEL_PRIVATE_KEY = ''
} = process.env

const timestamp = new Date().getDate()

export const API = Axios.create({
  baseURL: REACT_APP_MARVEL_API_URL,
  params: {
    apikey: REACT_APP_MARVEL_PUBLIC_KEY,
    ts: timestamp,
    hash: md5(
      timestamp + REACT_APP_MARVEL_PRIVATE_KEY + REACT_APP_MARVEL_PUBLIC_KEY
    )
  }
})

export const fetcher = (url: string, configs?: AxiosRequestConfig) =>
  API.get(url, configs).then(res => res.data)

export const fetcherWithQuery = (
  url: string,
  offset: number,
  limit: number,
  configs?: AxiosRequestConfig
) =>
  API.get(url, {
    ...configs,
    params: { ...configs?.params, offset, limit }
  }).then(res => res.data)

import axios from 'axios'

const isOkay = (response) => {
  return (response.status >= 200 && response.status <= 204)
}

export const get = async (endpoint) => {
  try {
    const response = await axios.get(endpoint)

    if (isOkay(response))
      return await response.data
  } catch {}

  return null
}

export const post = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data)
    if (isOkay(response))
      return await response.data
  } catch {}

  return null
}

export const put = async (endpoint, data) => {
  try {
    const response = await axios.put(endpoint, data)
    if (isOkay(response))
      return await response.data
  } catch {}

  return null
}

export const destroy = async (endpoint) => {
  try {
    const response = await axios.delete(endpoint)
    if (isOkay(response))
      return await response.data
  } catch {}

  return null
}

import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
})

export default api

export async function getDevelopers() {
  const { data } = await api.get('/developers')
  return data
}

export async function getZones() {
  const { data } = await api.get('/zones')
  return data
}

export async function getZoneById(id) {
  const { data } = await api.get(`/zones/${id}`)
  return data
}

export async function getUnits() {
  const { data } = await api.get('/units')
  return data
}

export async function getUnitById(id) {
  const { data } = await api.get(`/unit/${id}`)
  return data
}

export async function getHealth() {
  const { data } = await api.get('/health')
  return data
}

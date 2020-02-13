import axios from '@/plugin/axios'

const URI = '/email'

export function makeDraftGMail(rawId) {
  return axios.get(`/google/authorize`, {
    params: {
      redirectUri: process.env.VUE_APP_API_DOMAIN_LOCAL + `${URI}/draft/gmail`,
      rawId
    }
  })
}

export function makeDraftYahoo(request) {
  return axios.post(`${URI}/draft/yahoo`, request)
}

export function makeDraftOutlook(request) {
  return axios.post(`${URI}/draft/outlook`, request)
}

export function sendEmail(request) {
  return axios.post(`${URI}/send`, request)
}
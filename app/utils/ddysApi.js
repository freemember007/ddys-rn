import axios from 'axios'

const HOST = 'http://ws.wowys.com/app'

const basePostData = {
  spid: '9908',
  channel:'23',
  sign: '15eab0d24ae9c7a58443bde793cf745a',
  format: 'JSON',
  random: '1234',
  oper: '127.0.0.1'
}

const ddysApi = {}

const ddysServices = [
  'apphoslistv2', 
  'appdeptlistv2',
  'appdoclistv2'

]

ddysServices.forEach( service => {
   ddysApi[service] = function(postData){
    return axios.post(HOST, { service, ...basePostData, ...postData })
  }
})

export default ddysApi


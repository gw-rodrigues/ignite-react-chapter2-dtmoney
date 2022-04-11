import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs';

createServer({
  models:{
    transaction:Model
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Freelance de website',
          type:'deposit',
          category:'Dev',
          amount:6000,
          createdAt:new Date('2021-02-12 09:00:00')
        },
        {
          id:2,
          title:'Supermercado',
          type:'withdraw',
          category:'Compras',
          amount:1000,
          createdAt:new Date('2022-02-10 11:00:00')
        }
      ]
    })
  },
  routes(){
    this.namespace='api';
    this.get('transactions',()=>{
      return this.schema.all('transaction')
    })
    this.post('transactions',(schema,resquest)=>{
      const data = JSON.parse(resquest.requestBody)
      return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
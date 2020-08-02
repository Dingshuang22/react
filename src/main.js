
// 1. 把入口文件index.js如何修改成main.js呢？
// yarn eject 后 在config/paths.js下：把所有的appIndexJs 对应的index.js改成main.js即可。
// 想修改index.html同理
import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/scripts/redux/store';
import '@/styles/index.scss';
import Indexcpt from '@/scripts/views/index';
import * as serviceWorker from './serviceWorker';



const hotRender = ()=>{
  render(
      <Provider store={store}>
          <Indexcpt/>
      </Provider>,
      document.getElementById('root')
  )
}
hotRender()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import '../../public/css/index.pcss'
// import Seconds from '../common/Seconds'
// import { HashRouter, Route, NavLink } from 'react-router-dom';
// import Shop from '../shop/Index';
// import demo1 from '../demo/Index';
// import demo2 from '../demo2/Index';

// const Index = () =>
//     <HashRouter>
//         <div>
//             <div className="nav">
//                 <NavLink to="/" activeClassName="selected" exact>首页</NavLink>
//                 <NavLink to="/Shop" activeClassName="selected" exact>商城</NavLink>
//                 <NavLink to="/demo1" activeClassName="selected" exact>demo1</NavLink>
//                 <NavLink to="/demo2" activeClassName="selected">demo2</NavLink>
//             </div>
//             <Route exact path="/" component={() => <Seconds title="首页" />} />
//             <Route path="/Shop" component={Shop} />
//             <Route path="/demo1" component={demo1} />
//             <Route path="/demo2" component={demo2} />
//         </div>
//     </HashRouter>
//     ;

// // NavLink：渲染后会被转化程a链接
// // to：就是跳转页面地址
// // activeClassName：就是链接和当前页面路由一致后会使用这个样式。
// // exact ：精确匹配

// // 如果你的组件需要传值，就得返回这个组件：
// // <Route exact path="/" component={() => <Seconds title="首页"/>}/>
// // 不需要传值的就直接这样写：
// // <Route path="/Shop" component={Shop}/>

// export default Index;

import React from 'react';
import Seconds from '../common/Seconds'
import '../../public/css/index.pcss'

const Index = () => <Seconds title="首页"/>;

export default Index;
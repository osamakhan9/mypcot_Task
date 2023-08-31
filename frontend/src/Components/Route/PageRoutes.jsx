import React from 'react'
import { Routes,Route } from 'react-router'
import RegistrationForm from '../Registration/RegistrationForm'
import LoginForm from '../Login/LoginForm'
import Crud from '../CRUD/Crud'
import Home from '../Home/Home'
import NewTask from '../NewTask/NewTask'
import { SinglePageCrud } from '../SinglePage/SinglePageCrud'


const PageRoutes = () => {
  return (
	<div>
		<Routes>
			<Route path='/' element={<RegistrationForm/>}/>
			<Route path='/home' element={<Home/>}/>
			<Route path='/login' element={<LoginForm/>}/>
		    <Route path='/crud' element={<Crud/>}/>
			<Route path='/NewTask' element={<NewTask/>}/>
			<Route path='/SingleData/:id' element={<SinglePageCrud/>}/>
		</Routes>
	</div>
  )
}

export default PageRoutes
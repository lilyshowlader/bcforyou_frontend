// // npm modules
// import { useState, useEffect } from 'react'
// import { Routes, Route, useNavigate } from 'react-router-dom'

// // pages
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login'
// import Menu from './pages/Landing/Menu'
// import Profiles from './pages/Profiles/Profiles'
// import ChangePassword from './pages/ChangePassword/ChangePassword'
// import Condoms from './pages/Condoms'
// import Implanon from './pages/Implanon'
// import IUD from './pages/IUD'
// import NuvaRing from './pages/Nuvaring'
// import Pills from './pages/Pills'
// import ThePatch from './pages/ThePatch'
// import Landing from './pages/Landing/Landing'



// // components
// // import NavBar from './components/NavBar/NavBar'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
// import ReviewList from './pages/ReviewList/ReviewList'

// // services
// import * as authService from './services/authService'
// import * as reviewService from './services/reviewService'

// // styles
// import './App.css'

// function App() {
//   const [user, setUser] = useState(authService.getUser())
//   const [reviews, setReviews] = useState([])
//   const navigate = useNavigate()

//   // const handleLogout = () => {
//   //   authService.logout()
//   //   setUser(null)
//   //   navigate('/')
//   // }

//   const handleAuthEvt = () => {
//     setUser(authService.getUser())
//   }


//   // useEffect(() => {
//   //   const fetchAllReviews = async () => {
//   //     const data = await reviewService.index()
//   //     console.log('Review Data:', data)
//   //   }
//   //   if (user) fetchAllReviews()
//   // }, [user])


//   return (
//     <>
//       {/* <NavBar user={user} handleLogout={handleLogout} /> */}
//       <Routes>
//         <Route path="/" element={<Landing user={user} />} />
//         <Route
//           path="/profiles"
//           element={
//             <ProtectedRoute user={user}>
//               <Profiles />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/auth/signup"
//           element={<Signup handleAuthEvt={handleAuthEvt} />}
//         />
//         <Route
//           path="/auth/login"
//           element={<Login handleAuthEvt={handleAuthEvt} />}
//         />
//         <Route
//           path="/auth/change-password"
//           element={
//             <ProtectedRoute user={user}>
//               <ChangePassword handleAuthEvt={handleAuthEvt} />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/reviews"
//           element={
//             <ProtectedRoute user={user}>
//               <ReviewList reviews={reviews} />
//             </ProtectedRoute>
//           }
//         />


//         <Route path='/iud' element={<IUD />} />
//         <Route path='/patch' element={<ThePatch />} />
//         <Route path='/nuvaRing' element={<NuvaRing />} />
//         <Route path='/implanon' element={<Implanon />} />
//         <Route path='/condoms' element={<Condoms />} />
//         <Route path='/pills' element={<Pills />} />
//         <Route path='/menu' element={<Menu />} />


//       </Routes>
//     </>
//   )
// }

// export default App




        


// npm modules
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Menu from './pages/Landing/Menu'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Condoms from './pages/Condoms'
import Implanon from './pages/Implanon'
import IUD from './pages/IUD'
import NuvaRing from './pages/Nuvaring'
import Pills from './pages/Pills'
import ThePatch from './pages/ThePatch'
import Landing from './pages/Landing/Landing'

// components
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ReviewList from './pages/ReviewList/ReviewList'

// services
import * as authService from './services/authService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reviews"
          element={
            <ProtectedRoute user={user}>
              <ReviewList />
            </ProtectedRoute>
          }
        />

        <Route path='/iud' element={<IUD />} />
        <Route path='/patch' element={<ThePatch />} />
        <Route path='/nuvaRing' element={<NuvaRing />} />
        <Route path='/implanon' element={<Implanon />} />
        <Route path='/condoms' element={<Condoms />} />
        <Route path='/pills' element={<Pills />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </>
  )
}

export default App

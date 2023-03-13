import Naveber from './Naveber'

const Layout = ({children}) => {
  return (
    <div>Layout
        <Naveber/>
        {children}
    </div>
  )
}

export default Layout
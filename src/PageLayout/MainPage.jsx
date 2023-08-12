import Container from "../Components/SharedComponents/Container/Container"
import { Outlet } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default MainPage
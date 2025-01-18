import { useOpenClose } from "./hooks"

import { Button } from "./components/ButtonComponent"
import { MenuComponent } from "./components/MenuComponent"

function App() {  

  const { menuProps  } = useOpenClose()

  return (
    <>
      <Button />
      {menuProps.open &&
        <MenuComponent />
      }
      
    </>
  )
}

export default App

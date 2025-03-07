
import Title from "./Title";
import Menu from "./Menu";
import AppProvider from "./context";

function App  ()  {

  return (

<AppProvider>
    <main>
      <section className="menu"> 
        <Title  />
        <Menu  />
      </section>
    </main>
</AppProvider>
  )
};
export default App;

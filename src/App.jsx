
import Title from "./Title";
import Menu from "./Menu";
import AppProvider from "./context";
import Categories from "./Categoies";

function App  ()  {

  return (

<AppProvider>
    <main>
      <section className="menu"> 
        <Title  />
        <Categories />
        <Menu  />
      </section>
    </main>
</AppProvider>
  )
};
export default App;

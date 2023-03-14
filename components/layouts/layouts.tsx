import Header from "./header"
import MainNavigation from "./main-navigation"

const Layout = (props:any) => {
    return (
      <>
        <header className="fixed left-0 top-0 right-0 z-30 overflow-auto bg-white font-mulish">
          <Header />
          <div className="bg-white w-full relative">
            <MainNavigation />
          </div>
        </header>

        <main className="lg:mt-[70px] md:mt-36 mt-14 font-mulish">{props.children}</main>
      </>
    );
}

export default Layout
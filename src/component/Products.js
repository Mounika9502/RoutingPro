import{Link,Outlet}from 'react-router-dom'
export const Products=()=>{
    return (
      <>
        <div>
          <input type="search" placeholder="SearchProducts" />
        </div>
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>new</Link>
        </nav>
        <Outlet/>
      </>
    );
}
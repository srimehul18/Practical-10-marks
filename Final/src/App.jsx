import { useEffect, useState } from "react" 

function App() {
  const [data, setData] = useState([]) 
  const [page, setPage] = useState(1) 

  const limit = 4 

  useEffect(() => {
    const skip = (page - 1) * limit 

    fetch(`https://dummyjson.com/products?limit=4&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => setData(res.products)) 
  }, [page]) 

  return (
    <div>
      <h2>Products</h2>

      {data.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt="" width="150" />
        </div>
      ))}

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  ) 
}

export default App 
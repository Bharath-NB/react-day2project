const App = () => {

  const friends = [
    { id: 1, name: 'Bharath', age: 25 },
    { id: 2, name: 'Aarif', age: 27 },
    { id: 3, name: 'Kavin', age: 30 }
  ]

  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {
          friends.map(friend => 
            <li key={index}>{friend.name} {friend.age}</li>
          )
        }
      </ul>
    </div>
  )
}
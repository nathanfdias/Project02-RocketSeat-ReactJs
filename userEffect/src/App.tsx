import { useEffect, useState } from "react";

function avisarAPI(){
  console.log('Lista Salva!');
}

export function App() {
  const [list, setList] = useState<string[]>([]);
  // const [filteredList, setFilteredList] = useState<string[]>([]);
  const [filter, setFilter] = useState('');

  const filteredList = list.filter(item => item.includes(filter));

  // useEffect(() => {FuncaoExecudada}, [Quando])
  // Executa no incio e quando ocorrer mudança: Necessario condicional
  useEffect(() => {
    //atualizado
    console.log(list);
    if (list.length != 0) {
      avisarAPI();
    }
  }, [list]);


  //Executado na primeira renderização: Array vazio, chamadas para API
  useEffect(() =>{
    console.log('Primeira renderização')
    fetch('https://api.github.com/users/nathanfdias/repos')
      .then(response => response.json())
      .then(data => {
        setList(data.map((item:any) => item.full_name))
      })
  }, [])

  // useEffect(() => {
  //   setFilteredList(list.filter(item => item.includes(filter)))
  // }, [filter]);

  function addToList() {
    setList(state => [...state, 'Novo item'])
    // console.log(list)
    // avisarAPI();
  }

  // function removeFromList() {
  //   avisarAPI();
  // }

  return (
    <div>
      <h1>Hello World!</h1>

      <input type="text" onChange={e => setFilter(e.target.value)} value={filter}/>

      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
      <ul>
        {filteredList.map(item => <li>{item}</li>)}
      </ul>

      <button onClick={addToList}>AddToList</button>
    </div>
  )
}

// useEffect -> Side-effect -> Efeito Colateral

// Hooks:
// useState

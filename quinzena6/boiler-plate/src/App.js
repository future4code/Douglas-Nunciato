import React from 'react'
import styled from 'styled-components'
import './styles.css'

const Sesoen = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1vh;
`
const Listinha = styled.ul`
  padding: 0;
  width: 20vh;
  list-style: none;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
`
const BotaoAdd = styled.button`
border: none;
border-radius: 5px;
padding: 10px;
background-color: whitesmoke;
&:hover{
  background-color: #000;
  color: white;
}
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const tarefaEmString = JSON.stringify(this.state)
    localStorage.setItem("tarefa", tarefaEmString)
  };
  componentDidMount() {
    const tarefaSalva = localStorage.getItem("tarefa")
    if(tarefaSalva) {
      const estadoEmObj = JSON.parse(tarefaSalva)
      this.setState(estadoEmObj)
    }

  };

  onChangeInput = (event) => {
      this.setState({inputValue: event.target.value})

  }


  criaTarefa = () => {
    if (this.state.inputValue){
      const novaTarefa = {id: Date.now(), texto: this.state.inputValue , completa: false}
      const copiaTarefas = [novaTarefa,...this.state.tarefas]
      this.setState({tarefas: copiaTarefas, inputValue:""})
    }

  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefas)=>{
      if(id === tarefas.id){
        const novaTarefa = {
          ...tarefas,
          completa: !tarefas.completa
        }
        return novaTarefa
      } else {
        return tarefas
      }

    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }
 removerTarefa = (id) => {
  const novaLista = this.state.tarefas.filter((tarefa) =>{
    return id !== tarefa.id 
    }
  )
  this.setState({tarefas: novaLista})
   console.log('removido', id)
 }




  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <Sesoen>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <BotaoAdd onClick={this.criaTarefa}>Adicionar</BotaoAdd>
        </Sesoen>
        <br/>

        <Sesoen>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </Sesoen>
        <Listinha>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa


                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={()=> this.removerTarefa(tarefa.id)}



              >
                <div>{tarefa.texto}

                </div>


              </Tarefa>
            )
          })}
        </Listinha>
      </div>
    )
  }
}

export default App
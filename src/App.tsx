import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems';
import { useSEO } from './hooks/useSEO';

export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface Item {
  id: ItemId;
  timestamp: number;
  text: string;
}

function App() {
  const { items, addItem, removeItem } = useItems()
  useSEO({ 
    title: `[${items.length}] Technical test React`,
    description: 'Add and remove items from a list'
  })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    // const input = elements.namedItem('item') as HTMLInputElement

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return;

    addItem(input.value)

    input.value = ''
  }

  // const createHandleRemoveItem = (id: ItemId) => () => setItems(prevItems => prevItems.filter(prevItem => prevItem.id !== id))
  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Technical test React</h1>
        <h2>Add and remove elements to a list</h2>
        <form onSubmit={handleSubmit} aria-label="Add elements to the list">
          <label>
            New element:
            <input 
              name="item"
              required
              type='text'
              placeholder=''
            />
          </label>
          <button>Add new element to the list</button>
        </form>
      </aside>

      <section>
        <h2>List of elements</h2>
        
          {
            items?.length === 0 ? (
              <p>
                <strong>There are no elements in the list</strong>
              </p>
            ) : (
              <ul>
                {
                  items?.map(item => <Item {...item} handleClick={createHandleRemoveItem(item.id)} key={item.id}/>)
                }
              </ul>
            )
          }
      </section>
    </main>
  )
}

export default App

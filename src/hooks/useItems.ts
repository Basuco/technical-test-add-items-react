import { type ItemId, type Item } from "../App"
import { useState } from "react"

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([])

    const addItem = (text: string) => {
        const newItem: Item = {
            id: crypto.randomUUID(),
            text: text,
            timestamp: Date.now()
        }
      
        setItems(prevItems => [...prevItems, newItem])
    }

    const removeItem = (id: ItemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    return {
        items,
        addItem,
        removeItem
    }
}
import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe('useItemsHook', () => { 
    test('should add and remove items', () => {
        const { result } = renderHook(() => useItems())

        console.log(result.current)

        expect(result.current.items.length).toBe(0)
        
        // We need a rerender here, and React renders are async.
        // Thats why the act is needed
        act(() => {
            result.current.addItem('Play videogames')
            result.current.addItem('Go out to run')
        })
        expect(result.current.items.length).toBe(2)
    
        act(() => {
            result.current.removeItem(result.current.items[0].id)
        })
        expect(result.current.items.length).toBe(1)
    })
 })
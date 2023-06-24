


import useMindMap from './useMindMap'

describe('useMindMap', () => {
  test('should initialize with empty mind map', () => {
    const { result } = renderHook(() => useMindMap())

    expect(result.current.mindMap).toEqual({})
  })

  test('should add a new node to the mind map', () => {
    const { result } = renderHook(() => useMindMap())

    act(() => {
      result.current.addNode('Node 1')
    })

    expect(result.current.mindMap).toEqual({
      nodes: [
        {
          id: 1,
          text: 'Node 1',
          children: [],
        },
      ],
    })
  })

  test('should update the text of a node', () => {
    const { result } = renderHook(() => useMindMap())

    act(() => {
      result.current.addNode('Node 1')
    })

    act(() => {
      result.current.updateNodeText(1, 'Updated Node 1')
    })

    expect(result.current.mindMap).toEqual({
      nodes: [
        {
          id: 1,
          text: 'Updated Node 1',
          children: [],
        },
      ],
    })
  })

  test('should remove a node from the mind map', () => {
    const { result } = renderHook(() => useMindMap())

    act(() => {
      result.current.addNode('Node 1')
    })

    act(() => {
      result.current.removeNode(1)
    })

    expect(result.current.mindMap).toEqual({
      nodes: [],
    })
  })

  test('should link two nodes in the mind map', () => {
    const { result } = renderHook(() => useMindMap())

    act(() => {
      result.current.addNode('Node 1')
      result.current.addNode('Node 2')
    })

    act(() => {
      result.current.linkNodes(1, 2)
    })

    expect(result.current.mindMap).toEqual({
      nodes: [
        {
          id: 1,
          text: 'Node 1',
          children: [2],
        },
        {
          id: 2,
          text: 'Node 2',
          children: [],
        },
      ],
    })
  })
})


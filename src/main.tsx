import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { EcoTrash } from './EcoTrash'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <EcoTrash />
    </QueryClientProvider>

  </React.StrictMode>,
)

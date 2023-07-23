// Add a admission
export const addFeedback = async feedbackData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(feedbackData),
    })
  
    const data = await response.json()
    return data
  }
// Add a admission
export const addAdmission = async (admissionData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/admission`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(admissionData),
  });

  const data = await response.json();
  return data;
};
